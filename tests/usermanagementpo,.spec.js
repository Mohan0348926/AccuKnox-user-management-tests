//User management tests-ornge hrms
import { test, expect } from '@playwright/test';
//importing the loginpage from the PageObjects
import {loginpage} from '../PageObjects/loginpage.po';
//importing the navigateadmin from  the PageObjects
import {navigatetoadmin} from '../PageObjects/navigatetoadmin.po';
//importing the createuser from  the PageObjects
import {createuser} from '../PageObjects/createuser.po';
//importing the logindata from  the testdata
import logindata from'../testdata/login.json';
//importing the userdata from the testdat
import userdata from'../testdata/userdata.json';
//importing the searchdata from the testdata
import searchdata from'../testdata/searchdata.json';
//importing searchuser from the pageObjects
import {searchuser} from '../PageObjects/searchuser.po';
//importing edituser friom the PageObjects
import {edituser} from'../PageObjects/edituser.po';
//importing edituserdata from testdata
import  edituserdata from '../testdata/edituser.json';
//importing validateuser from PageObjects
import {validateuser} from '../PageObjects/validateuser.po';
//importing Validatedata from testdata
import validatedata from '../testdata/validateuser.json';
//importing deleteuser from PageObjects
import {Deleteuser} from '../PageObjects/deleteuser.po';
//importing delusername from testdta
import deluserdata from '../testdata/deleteuser.json';

//This test is for navigate to Admin page
test('Verify to navigate to adminpage',async({page})=>{
    const login=new loginpage(page)//create object for loginpage class
    const navigate=new navigatetoadmin(page)//creating object for navigatetoadmin 
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()

})
//This test is for creating a new user
test("verify to create user",async ({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const createuserpage=new createuser(page)//creating object for createuser class
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
    const search=new searchuser(page) //creating object for searchuser class
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await search.Searchuser(searchdata.username)
    await search.Recordfound()
})
//This test is for edit the existing user
test('Verify to edit the existing user',async({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const search=new searchuser(page)
    const edit=new edituser(page) //creating object for edituser class
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await search.Searchuser(searchdata.username)
    await search.Recordfound()
    await edit.edituser(edituserdata.editusername,edituserdata.editpassword,edituserdata.editrepassword)
    await edit.verifysedittheuser()

})
//This test is for Validate the updated user
test('Verify to validate  the updated user',async({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const search=new searchuser(page)
    const validate=new validateuser(page)// create object for validateuser class
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await search.Validatesearch(validatedata.username)
    await validate.validateuser()
})
// This test is for Delete the updated user
test('Verify to delete  the updated user',async({page})=>{
    const login=new loginpage(page)
    const navigate=new navigatetoadmin(page)
    const search=new searchuser(page)
    const del=new Deleteuser(page)//create object for Deleteuser class
    await login.launchApplication()
    await login.LoginwithCreds(logindata.username,logindata.password)
    await login.VerifyLoginsucess()
    await navigate.clickonadmin()
    await search.Deletesearch(deluserdata.delusername)
    await del.deletetheuser()
})
