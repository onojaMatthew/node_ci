const puppeteer = require("puppeteer");

let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("localhost:3000");
}, 30000)

afterEach(async () => {
  await browser.close();
});

test("We can lauch a new browser", async () => {
  const text = await page.$eval("a.brand-logo", el => el.innerHTML);
  expect(text).toEqual("Blogster");
});

test("clicking login starts oauth flow", async () => {
  await page.click(".right a");
  const url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});

test("When signed in, show login button", async () => {
  const id = "5c1c371c08b3dd03be1d96dd";
  const Buffer = require("safe-buffer").Buffer;
  const sessionObject = {
    passport: {
      user: id
    }
  }
})
