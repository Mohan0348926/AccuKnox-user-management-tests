import { test, expect } from '@playwright/test';
 exports.loginpage=class loginpage{
    
    constructor(page){
        this.page=page
        this.usernameinput=page.locator('input[name="username"]')
        this.passwordinput=page.locator('input[name="password"]')
        this.loginbutton=page.locator('button[type="submit"]')
        this.loginerrormsg=page.locator('//p[text()="Invalid credentials"]')
    }

    async launchApplication(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async  LoginwithCreds(username,password){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.loginbutton.click()
    }

    async  VerifyLoginsucess(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

}