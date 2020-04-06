const locators = {
    modalTitle: '[id="modalTitle"]',
    closeModalIcon: '[class="pm-modalClose"]',
    cancelButton: '//footer/button[1]',
    submitButton: '//footer/button[2]'
}

class DeleteFolderLabelModal {
    
    /**
     * page actions
     */
    clickSubmitButton() {
        const submitButtonElement = $(locators.submitButton)
        submitButtonElement.waitForClickable()
        submitButtonElement.click()
    }

    clickCancelButton() {
        const cancelButtonElement = $(locators.cancelButton)
        cancelButtonElement.waitForClickable()
        cancelButtonElement.click()
    }
}

module.exports = new DeleteFolderLabelModal()
