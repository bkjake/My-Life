"use strict.";

// source: http://seleniumhq.github.io/selenium/docs/api/javascript/
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Builder, By, Key, wait, until } from 'selenium-webdriver';
const browser = new Builder()
    .usingServer('http://192.168.1.118:4444/wd/hub')
    .withCapabilities({'browserName': 'chrome' })
    // .withCapabilities({'browserName': 'firefox'})
    // .withCapabilities({'browserName': 'internet explorer'})
    .build();

const TIMEOUT = 5000;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async function() {
    await browser.get('https://www.beerline.com/en/');
    let currentTitle = await browser.getTitle();
    console.info('Current title: ' + currentTitle);
    await browser.findElement(By.name('q')).sendKeys('selenium', Key.ENTER);
    await browser.wait(until.titleIs('selenium - products'), TIMEOUT);
    currentTitle = await browser.getTitle();
    console.info('Current title: ' + currentTitle);
    await browser.quit();
})();