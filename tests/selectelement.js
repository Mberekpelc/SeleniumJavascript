const {Builder, By, key} = require ("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function simpleRegister() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("test@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("password");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        await driver.sleep(3000);
    } catch (error) {
        console.log(error);
        
    }
    await driver.quit();
    
}
simpleRegister()