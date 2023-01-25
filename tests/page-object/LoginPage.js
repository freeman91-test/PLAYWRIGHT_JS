class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("[name='username']");
        this.password = page.locator("[name='password']");
        this.loginButton = page.locator(".oxd-button");
    }

    async enterUsername(username) {
        await this.username.clear();
        await this.username.type(username);
    }

    async openOrangeHRMURL() {
        console.log("The application is running on environment: ", process.env.MY_ENV);
        await this.page.goto(process.env.ORANGE_HRM_URL);
    }

    async enterPassword(password) {
        await this.password.clear();
        await this.password.type(password);
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.openOrangeHRMURL();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }
}
module.exports = { LoginPage };