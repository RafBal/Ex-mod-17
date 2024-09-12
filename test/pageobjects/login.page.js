import { $ } from '@wdio/globals'

class LoginPage {
    get btnSignUp(){
        return $('android=new UiSelector().text("Sign up")')
    }
    get firstName () {
        return $('id:firstName')
    }
    get lastName () {
        return $('id:lastName')
    }
    get phoneNumber () {
        return $('id:phone')
    }
    get email (){
        return $('id:email')
    }
    get password (){
        return $('android=new UiSelector().text("Password")')
    }
    get rePassword (){
        return $('android=new UiSelector().text("Re-enter Password")')
    }
    get btnCreate () {
        return $('id:create')
    }

    async login(firstName, lastName, phoneNumber, email, password, rePassword){
        await this.btnSignUp.click()
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.email.setValue(email)
        await this.password.setValue(password)

        await browser.waitUntil(
            async () => await this.rePassword.isDisplayed(),
            {
              timeout: 5000, 
              timeoutMsg: 'Campo de reintrodução da senha não foi detectado.'
            }
          );

        await this.rePassword.setValue(rePassword)
        await this.btnCreate.click()
}
}
export default new LoginPage();
