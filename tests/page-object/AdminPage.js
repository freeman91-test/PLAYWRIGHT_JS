class AdminPage {
    constructor(page) {
        this.page = page;
        this.userRole = page.getByText('-- Select --').first();
        this.status = page.getByText('-- Select --');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.tableList = page.locator('.oxd-table-body');
        this.rows = this.tableList.locator(".oxd-table-row");
        this.cell = this.rows.locator(".oxd-table-cell div");
    }

    async selectUserRole(userRole) {
        await this.userRole.click();
        await this.page.getByRole('option', { name: userRole }).getByText(userRole).click();    
    }

    async selectStatus(status) {
        await this.status.click();
        await this.page.getByRole('option', { name: status }).getByText(status).click();  
    }

    async clickOnSearch() {
        await this.searchButton.click();
    }

    async verifySearchedRows() {
        console.log("Rows: ", await this.rows.count());
        console.log("User Role :", await this.cell.nth(4).textContent());
        console.log("Status :", await this.cell.nth(6).textContent());    }
}
module.exports = { AdminPage };