import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'


describe('My Login application', () => {
    it('should sign up with valid credentials', async () => {
        await homePage.openMenu('profile')
        //await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await loginPage.login('Rafael_teste', 'Baldin_teste', '12345697890', 'rafael@teste.com.br' , 'teste123', 'teste123')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Rafael_teste')).isDisplayed()).toBeTruthy()

    })
})
