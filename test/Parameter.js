const { Builder, By, Key } = require('selenium-webdriver');
const ltCapabilities = require("../Capabilities");
const assert = require('assert');


describe(' second testing the use of mocha', function () {
    const USERNAME = ltCapabilities.capabilities['LT:Options'].username;
    const KEY = ltCapabilities.capabilities['LT:Options'].accessKey;
    const GRID_HOST = "hub.lambdatest.com/wd/hub";
    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;
    const todoEndpoint = "https://lambdatest.github.io/sample-todo-app/";

    browsers = [
        { browser: "chrome", bVersion: "93", os: "windows 10" },
        { browser: "firefox", bVersion: "91", os: "windows 10" },
        { browser: "chrome", bVersion: "132", os: "windows 11" }
    ];

    browsers.forEach(({ browser, bVersion, os })=> {

        it(`successfully add another todo for ${browser}, ${bVersion}, ${os}`, async function () {
            ltCapabilities.capabilities.browserName = browser;
            ltCapabilities.capabilities.browserVersion = bVersion
            ltCapabilities.capabilities['LT:Options'].platformName = os
            ltCapabilities.capabilities['LT:Options'].build = this.test.title

            driver = new Builder()
                .usingServer(gridUrl)
                .withCapabilities(ltCapabilities.capabilities)
                .build();
            await driver.get(todoEndpoint);
            await driver.findElement(By.xpath("//input[@id='sampletodotext']")).sendKeys("learn-selenium", Key.RETURN);
            let todotext = await driver.findElement(By.xpath("//li[last()]")).getText()
                .then(function (value) {
                    return value
                });
            assert.strictEqual(todotext, 'learn-selenium');
            await driver.quit();


        });


    });


});