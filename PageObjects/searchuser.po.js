import { test, expect } from '@playwright/test';
exports.searchuser= class searchuser{
    constructor(page){
        this.page=page
        this.Enterusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.searchbutton=page.locator('//button[@type="submit"]')
        this.userfound=page.locator('//span[text()="(1) Record Found"]')
        this.usernamefound=page.locator('//div[text()="Muttananda5"]')
    }
    async Searchuser(username){
        await this.Enterusername.fill(username)
        await this.searchbutton.click()
    }
    async Recordfound(){
        await expect(this.userfound).toBeVisible()
        await expect(this.usernamefound).toBeVisible()
    }

}