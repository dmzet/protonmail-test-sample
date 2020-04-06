import timeouts from '../../../utils/timeouts'

const locators = {
    notificationAlert: '//body/div[1]/div[3]/div'
}

class FoldersAndLabelsCommonComponents {
    checkNotificationAlertShown(alert) {
        const alertElement = $(locators.notificationAlert)
        alertElement.waitForDisplayed()

        const alertElementText = alertElement.getText()
        expect(alertElementText).to.equal(alert)
        return this
    }

    waitUntilNotificationAlertGone() {
        const alertElement = $(locators.notificationAlert)
        alertElement.waitForDisplayed(timeouts.tenSeconds, true)
        return this
    }
}

module.exports = FoldersAndLabelsCommonComponents
