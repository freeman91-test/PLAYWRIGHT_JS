const { test,expect } = require("@playwright/test");
const { ObjectManager } = require("../page-object/ObjectManager");

const loginDataSet = JSON.parse(JSON.stringify(require("../data/login-data.json")));


test.describe('Login', () => {

    test('Login to Orange HRM - Direct', async ({ page }) => {
        const objectManager = new ObjectManager(page);
        const loginPage = objectManager.getLoginPage();
        const homePage = objectManager.getHomePage();
        await loginPage.login(loginDataSet.username, loginDataSet.password);
        // expect(await homePage.getProfile()).toContain("Prajwal Collings");
        console.log(await homePage.getProfile());
        // expect(await homePage.getLogo.isVisible()).toBeTruthy();
    })

    test('Login to Orange HRM - Step by Step', async ({ page }) => {
        const objectManager = new ObjectManager(page);
        const loginPage = objectManager.getLoginPage();
        const homePage = objectManager.getHomePage();
        await loginPage.openOrangeHRMURL();
        await loginPage.enterUsername(loginDataSet.username);
        await loginPage.enterPassword(loginDataSet.password);
        await loginPage.clickOnLoginButton();
        // expect(await homePage.getProfile()).toContain("Prajwal Collings");
        console.log(await homePage.getProfile());

    })

})