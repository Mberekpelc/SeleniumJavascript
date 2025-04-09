const { Builder, By, key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function datepicker() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@placeholder='Min Max Picker']")).sendKeys(" 16 april 2020");
        await driver.findElement(By.xpath("(//input[@placeholder='Range Picker'])[1]")).sendKeys("12 march 2019 - 30 march 2019")
        await driver.findElement(By.css("#submit")).click();


        await driver.sleep(5000);
   } catch (error) {
       console.log(error);

   }
    await driver.quit();

}
datepicker();