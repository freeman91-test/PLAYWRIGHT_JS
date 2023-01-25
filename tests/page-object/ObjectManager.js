const { LoginPage } = require("../page-object/LoginPage");
const { HomePage } = require("../page-object/HomePage");
const { AdminPage } = require("../page-object/AdminPage");
const { MyInfoPage } = require("../page-object/MyInfoPage");

class ObjectManager {
    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.adminPage = new AdminPage(page);
        this.myInfoPage = new MyInfoPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getAdminPage() {
        return this.adminPage;
    }

    getMyInfoPage() {
        return this.myInfoPage;
    }
}
module.exports = { ObjectManager };