import { writeFileSync } from 'fs';
class IconGenerator {
  constructor(browser, page) {
    this.browser = browser;
    this.page = page;

    this.list = {};
    this.iconGenerator = [];
    this.url = 'https://confluence.atlassian.nhn.no/display/HR2/Ikoner+og+bruk+i+blokker';
  }

  // Henter ut alle ikonnavn, og kategorier fra confluence og legger det inne i filen AdditionalIconInformation.ts
  async main() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(60000);

    this.iconGenerator = await this.page.evaluate(() =>
      Array.from(document.querySelectorAll('tbody > tr > td:nth-child(2), td:nth-child(3), td:nth-child(6), td:nth-child(7)')).map(
        item => item.innerText
      )
    );

    let counter = 0;
    let key = '';

    try {
      this.iconGenerator.forEach((item, index) => {
        item = item.trim();
        if (counter === 0) {
          key = this.iconGenerator[index + 1].trim().toLowerCase();
          this.list[key] = this.list[key] ? this.list[key] : { alternativeName: item };
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
          } else {
            if (item) {
              this.list[key] = { ...this.list[key].categories.concat(item) };
            }
          }
          counter = 0;
        }
      });
    } catch (e) {
      console.log(e);
    }

    this.writeToJson();
    return this.iconGenerator;
  }

  writeToJson() {
    try {
      console.log(this.list);
      writeFileSync(
        '../../npm/designsystem/src/components/Icons/AdditionalIconInformation.ts',
        'export default ' + JSON.stringify(this.list)
      );
    } catch (e) {
      console.log('ERROR', e);
    }
  }
}

export default IconGenerator;
