import puppeteer from "puppeteer";
import IconGenerator from "./IconGenerator.js";

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
