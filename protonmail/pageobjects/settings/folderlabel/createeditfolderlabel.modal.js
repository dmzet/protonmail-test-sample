const FoldersAndLabelsCommonComponents = require('./foldersandlabels.common.components')

const locators = {
    modalTitle: '[id="modalTitle"]',
    nameInput: '[data-test-id="label/folder-modal:name"]',
    colorFirst: '[data-test-id="color-selector:#7272a7"]',
    colorLast: '[data-test-id="color-selector:#dfb286"]',
    cancelButton: '//footer/button[1]',
    submitButton: '//footer/button[2]',
    closeModalIcon: '[class="pm-modalClose"]'
}

class CreateFolderLabelModal extends FoldersAndLabelsCommonComponents {
    
    /**
     * page actions
     */
    typeName(name) {
        $(locators.nameInput).waitForClickable()
        $(locators.nameInput).setValue(name)
        return this
    }

    appendName(name) {
        $(locators.nameInput).addValue(name)
        return this
    }

    clickSubmitButton() {
        $(locators.submitButton).waitForClickable()
        $(locators.submitButton).click()
        return this
    }

    clickCancelButton() {
        $(locators.cancelButton).waitForClickable()
        $(locators.cancelButton).click()
    }

    clickCloseModalIcon() {
        $(locators.closeModalIcon).waitForClickable()
        $(locators.closeModalIcon).click()
    }

    selectFirstColor() {
        $(locators.colorFirst).click()
        return this
    }

    selectLastColor() {
        $(locators.colorLast).click()
        return this
    }

    /**
     * page validations
     */
    checkCreateFolderModalTitle() {
        const modalTitleElement = $(locators.modalTitle)
        modalTitleElement.waitForDisplayed()

        const modalTitle = modalTitleElement.getText()
        expect(modalTitle).to.equal('Create a new folder')
        return this
    }

    checkCreateLabelModalTitle() {
        const modalTitleElement = $(locators.modalTitle)
        modalTitleElement.waitForDisplayed()

        const modalTitle = modalTitleElement.getText()
        expect(modalTitle).to.equal('Create a new label')
        return this
    }
}

module.exports = new CreateFolderLabelModal()
