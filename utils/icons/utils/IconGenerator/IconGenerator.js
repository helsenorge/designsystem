import { exec } from 'child_process';
import { writeFileSync, mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { promisify } from 'util';

import { chromium } from 'playwright';

const execAsync = promisify(exec);

class IconGenerator {
  constructor() {
    this.list = {};
    this.iconGenerator = [];
    this.url = 'https://confluence.nhn.no/spaces/HR2/pages/438252962/Ikoner+og+bruk+i+blokker';
    this.selector = 'tbody > tr > td:nth-child(2), td:nth-child(3), td:nth-child(6), td:nth-child(7)';
  }

  /**
   * Kjører på Mac: bruker ekte Google Chrome sesjon via AppleScript for å fungere med SSO oppsettet på Mac.
   * Venter til confluence siden har blitt lastet (eller til 5 minutter har gått)
   *
   * NB - må aktiveres lokalt i Chrome for at det skal fungere:
   *  - Chrome: View > Developer > Allow JavaScript from Apple Events
   */
  async fetchIconsWithChromeAppleScript() {
    const appleScript = `
      set targetUrl to "${this.url}"

      tell application "Google Chrome"
        activate
        if (count of windows) = 0 then
          make new window
        end if

        tell window 1
          if (count of tabs) = 0 then
            make new tab with properties {URL:targetUrl}
          else
            set URL of active tab to targetUrl
          end if
        end tell
      end tell

      set resultText to ""
      repeat 300 times
        tell application "Google Chrome"
          tell active tab of window 1
            set cellCount to execute javascript "document.querySelectorAll('${this.selector}').length"
            if cellCount > 0 then
              set resultText to execute javascript "Array.from(document.querySelectorAll('${this.selector}')).map(item => item.innerText).join('|||')"
              exit repeat
            end if
          end tell
        end tell
        delay 1
      end repeat

      return resultText
    `.trim();

    const tmpDir = mkdtempSync(join(tmpdir(), 'icon-gen-'));
    const scriptPath = join(tmpDir, 'scrape-chrome.applescript');
    writeFileSync(scriptPath, appleScript, 'utf8');

    const { stdout, stderr } = await execAsync(`osascript "${scriptPath}"`);

    if (stderr && stderr.trim()) {
      console.error('osascript stderr:', stderr);
    }

    const output = stdout.trim();
    if (!output) return [];

    return output.split('|||').map(s => s.trim());
  }

  /**
   * Kjører på Windows/Andre OS:
   * Bruker Playwright Chromium.
   * Venter til confluence siden har blitt lastet (eller til 5 minutter har gått)
   */
  async fetchIconsWithPlaywright() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
      await page.goto(this.url, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector(this.selector, { timeout: 300000 });

      const result = await page.evaluate(
        selector => Array.from(document.querySelectorAll(selector)).map(item => item.innerText),
        this.selector
      );

      return result;
    } finally {
      await browser.close();
    }
  }

  // Henter ut alle ikonnavn, og kategorier fra ikon-tabellen og legger det inne i filen AdditionalIconInformation.ts
  async main() {
    try {
      if (process.platform === 'darwin') {
        // macOS
        this.iconGenerator = await this.fetchIconsWithChromeAppleScript();
      } else {
        // Windows/Andre OS
        this.iconGenerator = await this.fetchIconsWithPlaywright();
      }

      let counter = 0;
      let key = '';

      try {
        this.iconGenerator.forEach((rawItem, index) => {
          const item = rawItem.trim();

          if (counter === 0) {
            const next = this.iconGenerator[index + 1];
            if (!next) return;

            key = next.trim().toLowerCase();
            this.list[key] = this.list[key] || {
              alternativeName: item,
              categories: '',
            };
            counter++;
            return;
          }

          if (counter === 1) {
            counter++;
            return;
          }

          if (counter === 2) {
            this.list[key] = {
              ...this.list[key],
              categories: this.list[key].categories
                ? this.list[key].categories.includes(item)
                  ? this.list[key].categories
                  : this.list[key].categories.concat(', ' + item)
                : item || '',
            };
            counter++;
            return;
          }

          if (counter === 3) {
            if (this.list[key].categories) {
              if (item) {
                this.list[key] = {
                  ...this.list[key],
                  categories: this.list[key].categories.includes(item)
                    ? this.list[key].categories
                    : this.list[key].categories.concat(', ' + item),
                };
              }
            } else if (item) {
              this.list[key] = {
                ...this.list[key],
                categories: item,
              };
            }
            counter = 0;
          }
        });
      } catch (e) {
        console.log(e);
      }

      this.writeToJson();
      return this.iconGenerator;
    } catch (err) {
      console.error('Failed to fetch icons:', err);
      throw err;
    }
  }

  writeToJson() {
    try {
      const lines = [];
      lines.push('export default {');

      const isIdentifier = name => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
      const esc = s =>
        String(s ?? '')
          .replace(/\\/g, '\\\\')
          .replace(/'/g, "\\'");

      for (const [key, value] of Object.entries(this.list)) {
        const printedKey = isIdentifier(key) ? key : `'${key}'`;
        const alt = esc(value.alternativeName);
        const cat = esc(value.categories);

        lines.push(`  ${printedKey}: { alternativeName: '${alt}', categories: '${cat}' },`);
      }

      lines.push('};');
      lines.push('');

      const fileContent = lines.join('\n');

      console.log(this.list);
      writeFileSync('../../npm/designsystem/src/components/Icons/AdditionalIconInformation.ts', fileContent);
    } catch (e) {
      console.log('ERROR', e);
    }
  }
}

export default IconGenerator;
