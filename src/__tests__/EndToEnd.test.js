import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch(
      // {
      //   headless: false, // Lets us see the browser as the tests are run
      //   slowMo: 250, // Delays actions by 250ms so we can follow along
      //   ignoreDefaultArgs: ['--disable-extensions'] // Ignores default settings that may cause timeout errors
      // }
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  // Must see that the details of an event are not displayed by default
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.details-expanded');
    expect(eventDetails).toBeNull();
  });

  // Must see that the details of an event are displayed when clicking details button
  test('User can expand an event to see its details', async () => {
    await page.click('.details-button');
    const eventDetails = await page.$('.details-expanded');
    expect(eventDetails).toBeDefined();
  });

  // Must see that the details of an event are un-rendered when clicking the details button while the details were already rendered
  test('User can collapse an event to hide its details', async () => {
    // Here we already have the details expanded from the last test, so now we click the details button for effectively the second time
    await page.click('.details-button');
    const eventDetails = await page.$('.details-expanded');
    expect(eventDetails).toBeNull();
  });

});