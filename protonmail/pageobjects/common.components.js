const topNavigationBar = {
    settingsIcon: '[id="tour-settings"]'
}

class CommonComponents {
    /**
     * page actions
     */
    clickSettingsIcon() {
        $(topNavigationBar.settingsIcon).click()
    }
}

module.exports = CommonComponents
