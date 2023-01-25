const { test, expect } = require("@playwright/test");
const { ObjectManager } = require("../page-object/ObjectManager");
const loginDataSet = JSON.parse(JSON.stringify(require("../data/login-data.json")));
const adminDataSet = JSON.parse(JSON.stringify(require("../data/admin-data.json")));




test.describe('Login', () => {

    test('Login to Orange HRM - Direct', async ({ page }) => {
        const objectManager = new ObjectManager(page);
        const loginPage = objectManager.getLoginPage();
        const homePage = objectManager.getHomePage();
        const adminPage = objectManager.getAdminPage();
        await loginPage.login(loginDataSet.username, loginDataSet.password);
        // expect(await homePage.getProfile()).toContain("Prajwal Collings");
        await homePage.selectMenu(adminDataSet.menu);
        expect(await homePage.getTitle()).toContain(adminDataSet.menu);
        await adminPage.selectUserRole(adminDataSet.role);
        await adminPage.selectStatus(adminDataSet.status);
        await adminPage.clickOnSearch();
        await page.waitForLoadState('networkidle');
        await adminPage.verifySearchedRows();
    })

})