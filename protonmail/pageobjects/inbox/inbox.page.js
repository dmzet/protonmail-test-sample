const CommonComponents = require('../common.components')

class InboxPage extends CommonComponents {

    /**
     * page actions
     */
    openSettings() {
        super.clickSettingsIcon()
    }
}

module.exports = new InboxPage()
