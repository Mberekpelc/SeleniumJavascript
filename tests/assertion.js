const {Builder, By, Key} = require ('selenium-webdriver');
const assert = require('assert');
var should = require('chai').Should();

// import { Builder, By, Key } from 'selenium-webdriver';
// import assert from 'assert';
// import { should } from "chai";


async function example() {
    
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    await driver.findElement(By.xpath("//input[@id='sampletodotext']")).sendKeys("learn-selenium", Key.RETURN);
    let todotext = await driver.findElement(By.xpath("//li[last()]")).getText()
    .then(function(value) {
        return value
    });

    assert.strictEqual(todotext, 'learn-selenium');

    todotext.should.equal("learn-selenium");
    
    await driver.quit();
}
example()