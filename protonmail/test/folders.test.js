const LoginPage = require('../pageobjects/login/login.page')
const WelcomeModal = require('../pageobjects/inbox/welcome.modal')
const InboxPage = require('../pageobjects/inbox/inbox.page')
const SettingsMainPage = require('../pageobjects/settings/settingsmain.page')
const FoldersAndLabelsPage = require('../pageobjects/settings/folderlabel/foldersandlabels.page')
const CreateFolderLabelModal = require('../pageobjects/settings/folderlabel/createeditfolderlabel.modal')
const DeleteFolderLabelModal = require('../pageobjects/settings/folderlabel/deletefolderlabel.modal')

const user = 'dmzet'
const password = 'Pr0t0nM@!l'
const name = 'Folder' + (new Date()).getTime()
const edited = '_!@#$%^&*(){uüoó'
const editedName = `${name}${edited}`
const longName = 'We are scientists, engineers, and developers drawn together by a shared vision of protecting civil liberties online.'
const nameTooLongAlert = 'Name too long'
const folderExistAlert = 'A label or folder with this name already exists'
/**
 * Assumptions:
 * 1. If there will be an access 
 */
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

    it('opens folder creation modal after clicking add folder button', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal.checkCreateFolderModalTitle()
    })

    it('folder is not created when cancelling creation modal', () => {
        CreateFolderLabelModal
            .typeName(name)
            .clickCancelButton()
        FoldersAndLabelsPage.checkFolderLabelWithNameDoesNotExist(name)
    })

    it('folder is not created when closing creation modal', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal
            .checkCreateFolderModalTitle()
            .typeName(name)
            .clickCloseModalIcon()
        FoldersAndLabelsPage.checkFolderLabelWithNameDoesNotExist(name)
    })

    it('should allow folder creation', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal
            .typeName(name)
            .clickSubmitButton()
        FoldersAndLabelsPage.checkFolderLabelWithNameExists(name)
    })

    it('should allow folder editing - name and color change', () => {
        FoldersAndLabelsPage.clickEditFolderLabelButton()
        CreateFolderLabelModal
            .appendName(edited)
            .clickSubmitButton()
        FoldersAndLabelsPage
            .checkFolderLabelWithNameExists(editedName)
            .checkFolderLabelWithNameDoesNotExist(name)
            .waitUntilNotificationAlertGone()
    })
    
    it('should not allow folder creation with existing name', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal
            .typeName(editedName)
            .clickSubmitButton()
            .checkNotificationAlertShown(folderExistAlert)
            .clickCancelButton()
        FoldersAndLabelsPage.waitUntilNotificationAlertGone()
    })

    it('should allow folder deletion', () => {
        FoldersAndLabelsPage.clickDeleteFolderLabelButton()
        DeleteFolderLabelModal.clickSubmitButton()
        FoldersAndLabelsPage
            .checkFolderLabelWithNameDoesNotExist(editedName)
            .waitUntilNotificationAlertGone()
    })

    it('should not allow folder creation with empty name', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal.clickSubmitButton()
        /** 
         * small workaround as epmty name input field has bugs with 
         * displaying error see empty_folder_label_name.mp4 video
         */
        CreateFolderLabelModal
            .checkCreateFolderModalTitle()
            .clickCancelButton()
    })

    it('should not allow folder creation with too long folder name', () => {
        FoldersAndLabelsPage.clickAddFolderButton()
        CreateFolderLabelModal
            .typeName(longName)
            .clickSubmitButton()
            .checkNotificationAlertShown(nameTooLongAlert)
            .clickCancelButton()
    })
})
