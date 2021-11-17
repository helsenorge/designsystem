const puppeteer = require('puppeteer');
const IconGenerator = require('./IconGenerator');

(async () => {
  let browser;
  let page;

  try {
    browser = await puppeteer.launch({
      headless: false,
    });

    page = await browser.newPage();

    const iconGenerator = await new IconGenerator(browser, page).main();
  } catch (error) {}

  await browser.close();
})();
