const Page = require('../page')
const InboxPage = require('../inbox/inbox.page')
const WelcomeModal = require('../inbox/welcome.modal')

/**
 * page locators
 */
const loginForm = {
    usernameInput: '[id="username"]',
    passwordInput: '[id="password"]',
    loginButton: '[id="login_btn"]'
}

class LoginPage extends Page {

    /**
     * page actions
     */
    open(){
        super.open('login')
        return this
    }

    typeUsername(username) {
        $(loginForm.usernameInput).waitForDisplayed()
        $(loginForm.usernameInput).setValue(username)
        return this
    }

    typePassword(password) {
        $(loginForm.passwordInput).setValue(password)
        return this
    }

    clickLoginButton() {
        $(loginForm.loginButton).click()
    }
}

module.exports = new LoginPage()
