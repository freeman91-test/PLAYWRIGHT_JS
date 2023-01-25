const { test,expect } = require("@playwright/test");
const { ObjectManager } = require("../page-object/ObjectManager");
const loginDataSet = JSON.parse(JSON.stringify(require("../data/login-data.json")));
const {customTest} = require("../utils/Test-base");


test.describe('My Info', () => {
    customTest('Orange HRM Login test - My Info', async ({ page,myInfoData }) => {
        const objectManager = new ObjectManager(page);
        const loginPage = objectManager.getLoginPage();
        const homePage = objectManager.getHomePage();
        const myInfo = objectManager.getMyInfoPage();
        await loginPage.login(loginDataSet.username, loginDataSet.password);
        // expect(await homePage.getProfile()).toContain("Prajwal Collings");
        console.log(await homePage.getProfile());
        // expect(await homePage.getLogo.isVisible()).toBeTruthy();
        await homePage.selectMenu(myInfoData.menu);
        expect(await homePage.getTitle()).toContain(myInfoData.header);
        await myInfo.enterFirstName(myInfoData.firstName);
        await myInfo.enterMiddleName(myInfoData.middleName);
        await myInfo.enterLastName(myInfoData.lastName);
        await myInfo.selectNationality(myInfoData.nationality);
        await myInfo.selectMaritalStatus(myInfoData.marital);
        await myInfo.selectSmoker();
        await myInfo.clickOnContactDetailsTab();

    })
})