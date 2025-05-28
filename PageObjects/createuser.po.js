import { test, expect } from '@playwright/test';
exports.createuser=class createuser{
    constructor(page){
        this.page=page
        this.addbutton=page.locator('//button[text()=" Add "]')
        this.clickuserrole=page.locator('(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[1]')
        this.selectuserrole=page.locator('(//div[@role="option"])[2]')
        this.employeenameinput=page.locator('//input[@placeholder="Type for hints..."]')
        this.employeename=page.locator('//div[@role="option"] [2]')
        this.clickonstatus=page.locator('(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[2]')
        this.selectstatus=page.locator('//div[@role="option"][2]')
        this.createusername=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.createpassword=page.locator('(//input[@type="password"])[1]')
        this.reenterpassword=page.locator('(//input[@type="password"])[2]')
        this.submitbutton=page.locator('//button[@type="submit"]')
        this.systemuservisible=page.locator('//h5[text()="System Users"]')

    }
    async createuser(username,password,repassword){
        await this.addbutton.click()
        await this.clickuserrole.click()
        await this.selectuserrole.click()
        await this.employeenameinput.fill('B')
        await this.employeename.click()
        await this.clickonstatus.click()
        await this.selectstatus.click()
        await this.createusername.fill(username)
        await this.createpassword.fill(password)
        await this.reenterpassword.fill(repassword)
        await this.submitbutton.click()
    }
    async verifyusercreated(){
        await expect(this.systemuservisible).toBeVisible()
}}