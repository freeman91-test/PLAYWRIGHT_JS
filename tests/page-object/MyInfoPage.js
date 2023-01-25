class MyInfoPage{
    constructor(page){
       this.firstName = page.getByPlaceholder('First Name');
       this.middleName =page.getByPlaceholder('Middle Name');
       this.lastName = page.getByPlaceholder('Last Name');
       this.licenseExpiryDate = page.getByPlaceholder('yyyy-mm-dd').first();
       this.nationality =page.getByText('American');
       this.maritalStatus =page.getByText('Married');
       this.smoker =page.locator('label').filter({ hasText: 'Yes' }).locator('i');
       this.contactDetailsTab =page.getByRole('link', { name: 'Contact Details' });
    }

    async getMyInfoPageHeader(){
        return await this.myInfoHeader.textContent();

    }

    async enterFirstName(firstName){
        await this.firstName.clear();
        await this.firstName.type(firstName);
    }

    async enterMiddleName(middleName){
        await this.middleName.clear();
        await this.middleName.type(middleName);
    }

    async enterLastName(lastName){
        await this.lastName.clear();
        await this.lastName.type(lastName);
    }


    async selectNationality(nationality){
        await this.nationality.click();
        await this.page.getByRole('option', { name: nationality }).click();

    }
    
    async selectMaritalStatus(maritalStatus){
        await this.maritalStatus.click();
        await this.page.getByRole('option', { name: maritalStatus }).click();

    }
       
    async selectSmoker(){
        await this.smoker.click();
    }

    async clickOnContactDetailsTab(){
        await this.contactDetailsTab.click();
    }
}
module.exports={MyInfoPage};