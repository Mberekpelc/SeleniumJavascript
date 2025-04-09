const { Builder, By, key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function simpleradiobtn() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys("title that has 20 characters");
        await driver.findElement(By.css("#description")).sendKeys("description with at least 20 characters");
        await driver.findElement(By.xpath("(//span[@class='custom-control-indicator'])[1]")).click();
        await driver.findElement(By.css("#submit")).click();
        await driver.sleep(2000);
    } catch (error) {
        console.log(error);

    }
    await driver.quit();

}
simpleradiobtn();