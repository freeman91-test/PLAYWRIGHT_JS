const { default: test, expect } = require("@playwright/test");

test.describe('This is to practice playwright', () => {


    test('Orange HRM Login test', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("[name='username']").fill("Admin");
        await page.locator("[name='password']").fill("admin123");
        await page.locator('.oxd-button').click();
        await page.locator('.oxd-userdropdown-name').textContent();
        console.log(await page.locator('.oxd-userdropdown-name').textContent());
        expect(await page.locator('.oxd-userdropdown-name').isVisible()).toBeTruthy();
    })

    test('Orange HRM Login test - Admin', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("[name='username']").fill("Admin");
        await page.locator("[name='password']").fill("admin123");
        await page.locator('.oxd-button').click();
        await page.locator('.oxd-userdropdown-name').textContent();
        expect(await page.locator('.oxd-userdropdown-name').textContent()).toContain('Ben Benson');
        const sidePanel = await page.locator('.oxd-sidepanel-body');
        await page.getByPlaceholder('Search').type("Admin");
        await sidePanel.locator("text=Admin").click();
        await page.getByText('-- Select --').first().click();
        await page.getByRole('option', { name: 'Admin' }).getByText('Admin').click();
        await page.getByText('-- Select --').click();
        await page.getByRole('option', { name: 'Enabled' }).getByText('Enabled').click();
        await page.getByRole('button', { name: 'Search' }).click();
        await page.waitForLoadState('networkidle');
        const tableList = await page.locator('.oxd-table-body');
        const rows = await tableList.locator(".oxd-table-row");
        console.log("Rows: ", await rows.count());
        const cell = await rows.locator(".oxd-table-cell div")
        console.log("User Role :", await cell.nth(4).textContent());
        console.log("Status :", await cell.nth(6).textContent());

    })

    test('Orange HRM Login test - Menu Search', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("[name='username']").fill("Admin");
        await page.locator("[name='password']").fill("admin123");
        await page.locator('.oxd-button').click();
        await page.locator('.oxd-userdropdown-name').textContent();
        // expect(await page.locator('.oxd-userdropdown-name').textContent()).toContain('Ben Benson');
        const sidePanel = await page.locator('.oxd-sidepanel-body');
        await page.getByPlaceholder('Search').type("Admin");
        await sidePanel.locator("text=Admin").click();
        expect(await page.locator('.oxd-topbar-header-breadcrumb').textContent()).toContain('Admin');

        await page.getByPlaceholder('Search').type("Buzz");
        await sidePanel.locator("text=Buzz").click();
        expect(await page.locator('.oxd-topbar-header-breadcrumb').textContent()).toContain('Buzz');


        await page.getByPlaceholder('Search').type("Dashboard");
        await sidePanel.locator("text=Dashboard").click();
        expect(await page.locator('.oxd-topbar-header-breadcrumb').textContent()).toContain('Dashboard');
    })

    test('Orange HRM Login test - My Info', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("[name='username']").fill("Admin");
        await page.locator("[name='password']").fill("admin123");
        await page.locator('.oxd-button').click();
        await page.locator('.oxd-userdropdown-name').textContent();
        // expect(await page.locator('.oxd-userdropdown-name').textContent()).toContain('Ben Benson');
        const sidePanel = await page.locator('.oxd-sidepanel-body');
        await page.getByPlaceholder('Search').type("My Info");
        await sidePanel.locator("text=My Info").click();
        expect(await page.locator('.oxd-topbar-header-breadcrumb').textContent()).toContain('PIM');

        await page.getByPlaceholder('First Name').fill('Rahul');
        await page.getByPlaceholder('Middle Name').fill('P');
        await page.getByPlaceholder('Last Name').fill('K');

        await page.getByPlaceholder('yyyy-mm-dd').first().fill('2012-02-02');
        await page.getByText('American').click();
        await page.getByRole('option', { name: 'Indian' }).click();
        await page.getByText('Married').click();
        await page.getByRole('option', { name: 'Other' }).click();
        await page.locator('label').filter({ hasText: 'Yes' }).locator('i').click();
        await page.getByRole('link', { name: 'Contact Details' }).click();
    })
})