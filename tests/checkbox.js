const { Builder, By, key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function checkbox() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
        await driver.manage().window().maximize();
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("Checkbox_tester");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("Checkbox comment here");
        await driver.findElement(By.xpath("//input[@value='presidential-suite']//following::span[1]")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']//span[@class='customised-control-indicator']")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        await driver.sleep(5000);
   } catch (error) {
       console.log(error);

   }
    await driver.quit();

}
checkbox();