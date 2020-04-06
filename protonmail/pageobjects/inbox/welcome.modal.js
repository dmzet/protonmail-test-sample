const InboxPage = require('../inbox/inbox.page')

const locators = {
    notNowButton: '//footer/button[1]',
}

class WelcomeModal {
    /**
     * page actions
     */
    clickNotNowButton() {
        const notNowButtonElement = $(locators.notNowButton)
        notNowButtonElement.waitForDisplayed()
        notNowButtonElement.click()
        return InboxPage
    }
}

module.exports = new WelcomeModal()
