import { test, expect } from '@playwright/test';
exports.navigatetoadmin =class navigatetoadmin{
    constructor(page){
        this.page=page
        this.admin=page.locator('a[href="/web/index.php/admin/viewAdminModule"]')
    }
    async clickonadmin(){
        await this.admin.click()
    }
}