const { Builder, By, Key } = require('selenium-webdriver');
var should = require('chai').should();


describe('testing the use of mocha', function () {
    it('successfully add tod', async function () {
        let driver = new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');
        await driver.findElement(By.xpath("//input[@id='sampletodotext']")).sendKeys("learn-selenium", Key.RETURN);
        let todotext = await driver.findElement(By.xpath("//li[last()]")).getText()
            .then(function (value) {
                return value
            });
        //assert.strictEqual(todotext, 'learn-selenium');  // (node assertion)
        todotext.should.equal('learn-selenium');

        await driver.quit();


    })

})