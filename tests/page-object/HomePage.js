class HomePage {
   constructor(page) {
      this.brandLogo = page.locator(".oxd-brand-logo");
      this.profile = page.locator(".oxd-userdropdown-name");
      this.sidePanel = page.locator('.oxd-sidepanel-body');
      this.searchTextBox = page.getByPlaceholder('Search');
      this.header = page.locator('.oxd-topbar-header-breadcrumb');
      this.searchedMenu = page.locator('.oxd-main-menu-item--name');

   }

   async getProfile() {
      return await this.profile.textContent();
   }

   async getLogo() {
      return await this.brandLogo.isVisible();
   }

   async selectMenu(menu) {
      await this.sidePanel.click();
      await this.searchTextBox.type(menu);
      await this.searchedMenu.click();
   }

   async getTitle() {
      return await this.header.textContent();
   }

}
module.exports = { HomePage };