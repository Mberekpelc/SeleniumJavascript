const {Builder, By, Key} = require ('selenium-webdriver');
//import { Builder, By, Key, until } from 'selenium-webdriver';
(async () => {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('https://www.google.co.uk/');
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({implicit:10000});
    await driver.quit();
    
})
()


async function example() {
    
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://lambdatest.github.io/sample-todo-app/');
    await driver.findElement(By.xpath("//input[@id='sampletodotext']")).sendKeys("learn-selenium", Key.RETURN);
    await driver.sleep(5000);
    await driver.quit();
}
example()