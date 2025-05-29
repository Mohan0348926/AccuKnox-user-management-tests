import { test, expect } from '@playwright/test';
 exports.edituser=class edituser{
    constructor(page){
        this.page=page
        this.Editbutton=page.locator('(//button[@type="button"])[8]')
        this.clickuserrole=page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[1]')
        this.editonuserrole=page.locator('//div[@role="option"][3]')
        this.Editusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.Changepassword=page.locator('//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]')
        this.Editpassword=page.locator('(//input[@type="password"])[1]')
        this.Editrepassword=page.locator('(//input[@type="password"])[2]')
        this.SaveButton=page.locator('//button[@type="submit"]')
        this.Succespage=page.locator('//h5[text()="System Users"]')

    }
    async edituser(editusername,editpassword,editrepassword){
        await this.Editbutton.click()
        await this.clickuserrole.click()
        await this.editonuserrole.click()
        await this.Editusername.fill(editusername)
        await this.Changepassword.check()
        await this.Editpassword.fill(editpassword)
        await this.Editrepassword.fill(editrepassword)
        await this.SaveButton.click()
    }
    async verifysedittheuser(){
        await expect(this.Succespage).toBeVisible()
    }
}