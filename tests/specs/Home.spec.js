const { test,expect } = require("@playwright/test");
const { ObjectManager } = require("../page-object/ObjectManager");
const loginDataSet = JSON.parse(JSON.stringify(require("../data/login-data.json")));
const homeDataSet = JSON.parse(JSON.stringify(require("../data/home-data.json")));



test.describe('Home page', () => {

    for (const data of homeDataSet){
        test(`Menu Search - ${data.menu}`, async ({ page }) => {
            const objectManager = new ObjectManager(page);
            const loginPage = objectManager.getLoginPage();
            const homePage = objectManager.getHomePage();
            await loginPage.login(loginDataSet.username, loginDataSet.password);
            // expect(await homePage.getProfile()).toContain("Prajwal Collings");
            console.log(await homePage.getProfile());
            // expect(await homePage.getLogo.isVisible()).toBeTruthy();
            await homePage.selectMenu(data.menu);
            expect(await homePage.getTitle()).toContain(data.header);
        })
    }

})