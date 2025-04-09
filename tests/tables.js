const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function tables() {
    let results = [];
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/tables/smart-table");

        for (let i = 1; i < 6; i++) {
            const rows = await driver.findElements(By.xpath("//tbody/tr"));
            for (const row of rows) {
                let rowdata = (await row.getText()).split(/\n/);
                console.log(rowdata);
                results.push({
                    id: rowdata[0],
                    firstname: rowdata[1],
                    lastname: rowdata[2],
                    username: rowdata[3],
                    email: rowdata[4],
                    age: rowdata[5]
                })
            }
            await driver.findElement(By.xpath("//a[@aria-label='Next']")).click();
        }
      
        console.table(results);

    } catch (error) {
        console.log(error);

    }

    await driver.quit();

}
tables();
