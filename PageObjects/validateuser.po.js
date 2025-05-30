import { test, expect } from '@playwright/test';
exports.validateuser = class validateuser{
    constructor(page){
        this.page=page
        this.validateusername=page.locator('//div[text()="Mohansharu6360"]')
    }
    async validateuser(){
        await expect(this.validateusername).toBeVisible()
    }
}