const { Builder, By, key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function fileupload() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0)
        await driver.findElement(By.xpath("//input[@aria-labelledby='i1 i4']")).sendKeys("Tester Test001");
        await driver.findElement(By.xpath("(//div[@id='i20'])[1]")).click();

        //await driver.findElement(By.css("#submit")).click();
        await driver.sleep(5000);
   } catch (error) {
       console.log(error);

   }
    await driver.quit();

}
fileupload();