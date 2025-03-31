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

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Find the topmost version entry
  if (!inEntry && line.startsWith('## [')) {
    const match = line.match(/^## \[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      version = match[1];
      link = match[2];
      inEntry = true;
    }
    continue;
  }

  // Parse lines until the next version or EOF
  if (inEntry) {
    if (line.startsWith('## [')) {
      // Next version => stop
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
    if (inFeatures && line.trim().startsWith('*')) {
      features.push(cleanupLine(line));
    }
    // Gather bugfix lines
    if (inBugFixes && line.trim().startsWith('*')) {
      bugFixes.push(cleanupLine(line));
    }
  }
}

if (!version || !link) {
  console.error('Failed to parse version or link from CHANGELOG.md');
  process.exit(1);
}

// Use the repo name from an environment variable, or fall back
const repoName = process.env.REPO_NAME || 'UNKNOWN-REPO';

let message = `<${link}|${repoName} ${version}>\n`;

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
