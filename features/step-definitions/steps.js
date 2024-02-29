const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const homePage = require('../pageobjects/home.page.js');

Given(/^Pingkan is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Pingkan login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})


//positif
Then(/^Pingkan should see home page$/, async() => {
    await homePage.validatehomePage()
})

//negatif1
Then(/^Pingkan should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})

//negatif2
Then(/^Pingkan should see home page with all product using dog image$/, async() => {
    await homePage.validatehomePageProblemUser()
})

//negatif3
Then(/^Pingkan should get glitch and see home page$/, async() => {
    await homePage.validatehomePageGlitch()
})

//negatif4
Then(/^Pingkan should see home page, add cart, and cant remove$/, async() => {
    await homePage.validatehomePageError()
})

//negatif5
Then(/^Pingkan should see failure home page$/, async() => {
    await homePage.validatehomePageVisual()
})