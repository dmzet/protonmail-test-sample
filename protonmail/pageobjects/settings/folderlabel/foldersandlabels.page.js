import { expect } from "chai"
import timeouts from '../../../utils/timeouts'
const FoldersAndLabelsCommonComponents = require('./foldersandlabels.common.components')

const locators = {
    addFolderButton: '[data-test-id="folders/labels:addFolder"]',
    addLabelButton: '[data-test-id="folders/labels:addLabel"]',
    deleteDropdown: '[data-test-id="dropdown:open"]',
    deleteButton: '[data-test-id="folders/labels:item-delete"]',
    notificationToggle: '[data-test-id="folders/labels:item-notification-toggle"]',
    label: '[data-test-id="folders/labels:item-type:label"]',
    folderLabel(name) { return 'span=' + name },
    editFolderLabelDropDown: '[data-test-id="folders/labels:item-edit"]',
    deleteFolderLabelDropdown: '[data-test-id="dropdown:open"]',
    deleteFolderLabelButton: '[data-test-id="folders/labels:item-delete"]'
}

class FoldersAndLabelsPage extends FoldersAndLabelsCommonComponents {
    /**
     * page actions
     */
    clickAddFolderButton() {
        let addFolderButtonElement = $(locators.addFolderButton)
        addFolderButtonElement.waitForClickable()
        addFolderButtonElement.click()
    }

    clickAddLabelButton() {
        let addLabelButtonElement = $(locators.addLabelButton)
        addLabelButtonElement.waitForClickable()
        addLabelButtonElement.click()
    }

    clickEditFolderLabelButton() {
        $(locators.editFolderLabelDropDown).click()
    }

    clickDeleteFolderLabelButton() {
        $(locators.deleteFolderLabelDropdown).waitForClickable()
        $(locators.deleteFolderLabelDropdown).click()
        $(locators.deleteFolderLabelButton).click()
    }

    /**
     * page verifications
     */
    checkFolderLabelWithNameExists(name) {
        $(locators.folderLabel(name)).waitForDisplayed()
        return this
    }

    checkFolderLabelWithNameDoesNotExist(name) {
        const folderLabelElement = $(locators.folderLabel(name))
        folderLabelElement.waitForDisplayed(timeouts.twoSeconds, true)

        const isExisting = folderLabelElement.isExisting()
        expect(isExisting).to.be.false
        return this
    }
}

module.exports = new FoldersAndLabelsPage()