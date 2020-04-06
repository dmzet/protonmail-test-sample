import FoldersAndLabelsPage from './folderlabel/foldersandlabels.page'

const leftSettingsPanel = {
    foldersAndLabelsText: '*=Folders/labels'
}

class SettingsMainPage {
    /**
     * define elements
     */
    openFoldersAndLabelsFromMainArea() {
        $(leftSettingsPanel.foldersAndLabelsText).click()
    }
}

module.exports = new SettingsMainPage()
