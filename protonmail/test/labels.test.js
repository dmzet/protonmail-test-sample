const LoginPage = require('../pageobjects/login/login.page')
const WelcomeModal = require('../pageobjects/inbox/welcome.modal')
const InboxPage = require('../pageobjects/inbox/inbox.page')
const SettingsMainPage = require('../pageobjects/settings/settingsmain.page')
const FoldersAndLabelsPage = require('../pageobjects/settings/folderlabel/foldersandlabels.page')
const CreateFolderLabelModal = require('../pageobjects/settings/folderlabel/createeditfolderlabel.modal')
const DeleteFolderLabelModal = require('../pageobjects/settings/folderlabel/deletefolderlabel.modal')

const user = 'UPDATE_IT'
const password = 'UPDATE_IT'
const name = 'Label' + (new Date()).getTime()
const edited = '_!@#$%^&*(){uüoó'
const editedName = `${name}${edited}`
const longName = 'We are scientists, engineers, and developers drawn together by a shared vision of protecting civil liberties online.'
const nameTooLongAlert = 'Name too long'
const labelExistAlert = 'A label or folder with this name already exists'

describe('Folders and labels form', () => {

    it('can be opened from main settings area', () => {
        LoginPage
            .open()
            .typeUsername(user)
            .typePassword(password)
            .clickLoginButton()
        WelcomeModal.clickNotNowButton()
        InboxPage.openSettings()
        SettingsMainPage.openFoldersAndLabelsFromMainArea()
    })

    it('opens label creation modal after clicking add label button', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .checkCreateLabelModalTitle()
            .clickCancelButton()
    })

    it('label is not created when cancelling creation modal', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .typeName(name)
            .clickCancelButton()
        FoldersAndLabelsPage.checkFolderLabelWithNameDoesNotExist(name)
    })

    it('label is not created when closing creation modal', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .checkCreateLabelModalTitle()
            .typeName(name)
            .clickCloseModalIcon()
        FoldersAndLabelsPage.checkFolderLabelWithNameDoesNotExist(name)
    })

    it('should allow label creation', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .typeName(name)
            .selectFirstColor()
            .clickSubmitButton()
        FoldersAndLabelsPage.checkFolderLabelWithNameExists(name)
    })

    it('should allow label editing - name and color change', () => {
        FoldersAndLabelsPage.clickEditFolderLabelButton()
        CreateFolderLabelModal
            .appendName(edited)
            .selectLastColor()
            .clickSubmitButton()
        FoldersAndLabelsPage
            .checkFolderLabelWithNameExists(editedName)
            .checkFolderLabelWithNameDoesNotExist(name)
            .waitUntilNotificationAlertGone()
    })

    it('should not allow label creation with existing name', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .typeName(editedName)
            .clickSubmitButton()
            .checkNotificationAlertShown(labelExistAlert)
            .clickCancelButton()
    })

    it('should allow label deletion', () => {
        FoldersAndLabelsPage.clickDeleteFolderLabelButton()
        DeleteFolderLabelModal.clickSubmitButton()
        FoldersAndLabelsPage
            .checkFolderLabelWithNameDoesNotExist(editedName)
            .waitUntilNotificationAlertGone()
    })

    it('should not allow label creation with empty name', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal.clickSubmitButton()
        /** 
         * small workaround as epmty name input field has bugs with 
         * displaying error see empty_folder_label_name.mp4 video
         */
        CreateFolderLabelModal
            .checkCreateLabelModalTitle()
            .clickCancelButton()
    })

    it('should not allow label creation with too long lable name', () => {
        FoldersAndLabelsPage.clickAddLabelButton()
        CreateFolderLabelModal
            .typeName(longName)
            .clickSubmitButton()
            .checkNotificationAlertShown(nameTooLongAlert)
            .clickCancelButton()
    })
})
