const locators = {
    modalTitle: '[id="modalTitle"]',
    cancelButton: '[//header/button[1]]',
    submitButton: '[//header/button[2]]',
    closeModalIcon: '[class="pm-modalClose"]',
    cancelButton: '//footer/button[1]',
    submitButton: '//footer/button[2]'
}

class DeleteFolderLabelModal {
    /**
     * page actions
     */
    clickSubmitButton() {
        $(locators.submitButton).waitForClickable()
        $(locators.submitButton).click()
    }

    clickCancelButton() {
        $(locators.cancelButton).waitForClickable()
        $(locators.cancelButton).click()
    }
}

module.exports = new DeleteFolderLabelModal()
