import { test, expect } from '@playwright/test';
exports.searchuser= class searchuser{
    constructor(page){
        this.page=page
        this.Enterusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.validateEnterusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.searchbutton=page.locator('//button[@type="submit"]')
        this.userfound=page.locator('//span[text()="(1) Record Found"]')
        this.usernamefound=page.locator('//div[text()="Sharwinmanu20"]')
        this.searchdeleteusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    }
    async Searchuser(username){
        await this.Enterusername.fill(username)
        await this.searchbutton.click()
    }
    async Recordfound(){
        await expect(this.userfound).toBeVisible()
        await expect(this.usernamefound).toBeVisible()

    }
    async Validatesearch(username){
        await this.validateEnterusername.fill(username)
        await this.searchbutton.click()
        
    }
    async Deletesearch(delusername){
        await this.searchdeleteusername.fill(delusername)
        await this.searchbutton.click()
    }

}