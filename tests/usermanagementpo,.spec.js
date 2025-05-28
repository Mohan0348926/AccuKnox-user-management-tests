import { test, expect } from '@playwright/test';
import {loginpage} from '../PageObjects/loginpage.po';
import {navigatetoadmin} from '../PageObjects/navigatetoadmin.po';
import {createuser} from '../PageObjects/createuser.po';
import logindata from'../testdata/login.json';
import userdata from'../testdata/userdata.json';
import searchdata from'../testdata/searchdata.json';
import {searchuser} from '../PageObjects/searchuser.po';
//This test is for navigate to Admin page
test('Verify to navigate to adminpage',async({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()

})
//This test is for creating a new user
test("verify to create user",async ({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const createuserpage=new createuser(page)
    //const search=new searchuser(page)
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await createuserpage.createuser(userdata.username,userdata.password,userdata.repassword)
    await createuserpage.verifyusercreated()
 
})
// This test is for Searching a existing user
test("verify to search user",async ({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const search=new searchuser(page)
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await search.Searchuser(searchdata.username)
    await search.Recordfound()
})
