const { Builder, By} = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function dropdownbtn() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const selectbtn = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        await selectbtn.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await selectbtn.click();

        await driver.findElement(By.xpath(`//option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//option[@value="2: 'opel'"]`)).click();

        const selectbtn3 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
        await selectbtn3.click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();

        await driver.findElement(By.xpath("(//select[@id='selectCar'])[2]")).click();
        await driver.findElement(By.xpath("(//select[@id='selectCar'])[2]/child::option[4]")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();

        await driver.sleep(2000);
    } catch (error) {
        console.log(error);

    }
    await driver.quit();

}
dropdownbtn();
