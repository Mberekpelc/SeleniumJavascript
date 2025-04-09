const { Builder, By, key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build()

async function fileupload() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys("/Users/Lawrence.Mberekpe/Workspace/SeleniumTraining/SeleniumJavascript/My_file/file_upload.jpg");
        await driver.findElement(By.css("#submit")).click();


        await driver.sleep(5000);
   } catch (error) {
       console.log(error);

   }
    await driver.quit();

}
fileupload();