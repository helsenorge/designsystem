/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/sendSlackMessage.js

const fs = require('fs');
const https = require('https');
const { URL } = require('url');

/**
 * cleanupLine(line):
 *   - Replace the leading "*" with "• " (Unicode bullet).
 *   - Remove markdown links [text](url).
 *   - Remove leftover "()" if empty.
 *   - Remove any trailing ", closes..." or "closes...".
 *   - Remove "**" (double asterisk for bold).
 *   - Collapse extra spaces, trim.
 */
function cleanupLine(line) {
  let clean = line.trim();

  // Replace leading "*" with "• "
  clean = clean.replace(/^\*\s*/, '• ');

  // Remove [ ... ]( ... ) links
  clean = clean.replace(/\[.*?\]\(.*?\)/g, '');

  // Remove empty parentheses
  clean = clean.replace(/\(\s*\)/g, '');

  // Remove ", closes..." or "closes..."
  clean = clean.replace(/,?\s*closes.*$/i, '');

  // Remove "**"
  clean = clean.replace(/\*\*/g, '');

  // Collapse multiple spaces
  clean = clean.replace(/\s\s+/g, ' ').trim();

  return clean;
}

const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');
const lines = changelog.replace(/\r\n/g, '\n').split('\n');

let version = '';
let link = '';
let inEntry = false;
let inFeatures = false;
let inBugFixes = false;
const features = [];
const bugFixes = [];

/**
 * We look for the first line starting with "## ".
 * Two possible patterns:
 * 1) ## [<version>](<link>)...
 * 2) ## <version> (2025-03-26)...
 *
 * For beta:  ## 35.0.0-beta.7 (date)
 * For standard: ## [34.9.0](link) (date)
 * We'll parse whichever format matches.
 */
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Find the topmost version entry: must start with `## `
  if (!inEntry && line.startsWith('## ')) {
    // Try to match the link format: e.g. "## [34.9.0](http://...)"
    let match = line.match(/^## \[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      // Format 1: version + link
      version = match[1];
      link = match[2];
      inEntry = true;
      continue;
    }

    // Otherwise, try no-link format: e.g. "## 35.0.0-beta.7 (2025-03-26)"
    match = line.match(/^## ([^\s]+.*)/);
    if (match) {
      version = match[1].trim(); // e.g. "35.0.0-beta.7 (2025-03-26)"
      // If you only want the raw semver, you'd parse out the date, but let's keep it.
      inEntry = true;
      continue;
    }
  }

  // If we've already found our version line, parse the subsequent lines for features/bugs
  if (inEntry) {
    // Stop if we see another "## " => next version block
    if (line.startsWith('## ')) {
      break;
    }

    if (line.startsWith('### Features')) {
      inFeatures = true;
      inBugFixes = false;
      continue;
    }
    if (line.startsWith('### Bug Fixes')) {
      inFeatures = false;
      inBugFixes = true;
      continue;
    }

    // Another "### " => end the current section
    if (line.startsWith('### ')) {
      inFeatures = false;
      inBugFixes = false;
      continue;
    }

    // Gather feature lines
    if (inFeatures && (line.trim().startsWith('*') || line.trim().startsWith('-'))) {
      features.push(cleanupLine(line));
    }
    // Gather bug-fix lines
    if (inBugFixes && (line.trim().startsWith('*') || line.trim().startsWith('-'))) {
      bugFixes.push(cleanupLine(line));
    }
  }
}

// Ensure at least we got a version
if (!version) {
  console.error('Failed to parse version from CHANGELOG.md');
  process.exit(1);
}

// Use the repo name from an environment variable, or fall back
const repoName = process.env.REPO_NAME || 'UNKNOWN-REPO';

// Build the Slack message
// If link is present, do clickable Slack link: <link|repoName version>
// If link is empty, just do "repoName version"
let message = link ? `<${link}|${repoName} ${version}>\n` : `${repoName} ${version}\n`;

if (features.length) {
  message += `\n*Features*\n${features.join('\n')}\n`;
}
if (bugFixes.length) {
  message += `\n*Bugs*\n${bugFixes.join('\n')}\n`;
}

const webhookUrl = process.env.SLACK_WEBHOOK_URL;
if (!webhookUrl) {
  console.log('No Slack Webhook URL provided. Logging message below:\n');
  console.log(message);
  process.exit(0);
}

// Send to Slack
const payload = JSON.stringify({ text: message });
const { hostname, pathname } = new URL(webhookUrl);

const options = {
  hostname,
  path: pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, res => {
  console.log(`Slack responded with status code: ${res.statusCode}`);
  res.resume();
});

req.on('error', e => {
  console.error('Error sending to Slack:', e);
  process.exit(1);
});

req.write(payload);
req.end();
