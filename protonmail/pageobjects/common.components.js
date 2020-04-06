const SettingsMainPage = require('./settings/settingsmain.page')

/**
 * page locators
 */
const topNavigationBar = {
    settingsIcon: '[id="tour-settings"]'
}

class CommonComponents {
    /**
     * define elements
     */
    clickSettingsIcon() {
        $(topNavigationBar.settingsIcon).click()
    }
}

module.exports = CommonComponents
