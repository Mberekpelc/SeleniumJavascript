const { Builder, By, Key } = require('selenium-webdriver');
const ltCapabilities = require("../Capabilities");
var should = require('chai').should();
const assert = require('assert');


describe(' second testing the use of mocha', function () {
    //username
    const USERNAME = ltCapabilities.capabilities['LT:Options'].username;

    //key
    const KEY = ltCapabilities.capabilities['LT:Options'].accessKey;

    //host
    const GRID_HOST = "hub.lambdatest.com/wd/hub";

    // url
    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;
    const todoEndpoint = "https://lambdatest.github.io/sample-todo-app/"

    beforeEach(function(){
        ltCapabilities.capabilities['LT:Options'].build = this.currentTest.title;
        driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();

    });

    afterEach(async function(){
        await driver.quit();

    });

    it('successfully add another tod', async function () {
        //let driver = new Builder().forBrowser('firefox').build();
        await driver.get(todoEndpoint);
        await driver.findElement(By.xpath("//input[@id='sampletodotext']")).sendKeys("learn-selenium", Key.RETURN);
        let todotext = await driver.findElement(By.xpath("//li[last()]")).getText()
            .then(function (value) {
                return value
            });
        assert.strictEqual(todotext, 'learn-selenium');  // (node assertion)
        //todotext.should.equal('learn-selenium'); // (chai assertion)


    })

    it('successfully add another for reporter tod', async function () {
        //let driver = new Builder().forBrowser('firefox').build();
        await driver.get(todoEndpoint);
        await driver.findElement(By.xpath("//input[@id='sampletodotext']"))
        .sendKeys("learn-selenium", Key.RETURN);
        let todotext = await driver.findElement(By.xpath("//li[last()]")).getText()
            .then(function (value) {
                return value
            });
        //assert.strictEqual(todotext, 'learn-selenium');  // (node assertion)
        todotext.should.equal('learn-selenium');


    })

})