import { test, expect } from '@playwright/test';
exports.Deleteuser =class Deleteuser{
    constructor(page){
        this.page=page
        this.Deletebutton=page.locator('(//button[@type="button"])[7]')
        this.confirmdelete=page.locator('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]')
    }
    async deletetheuser(){
        await this.Deletebutton.click()
        await this.confirmdelete.click()
         
    }
}