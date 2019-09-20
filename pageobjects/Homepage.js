
var Homepage = function() {
  var contentservices = element(by.css(".adf-sidenav-link[data-automation-id='Content Services']"));
  var createfoldericon = element(by.css('button[data-automation-id="create-new-folder"]'));
  var nametextbox = element(by.id('adf-folder-name-input'));
  var createbtn = element(by.id('adf-folder-create-button'));
  var validationmsg = element(by.css('#cdk-overlay-4 > snack-bar-container > simple-snack-bar > span'));
  var cancelbtn = element(by.id('adf-folder-cancel-button'));
  var foldernameicon = element(by.css('.adf-datatable-content-cell'));
  var folderlist = element.all(by.css('.adf-datatable-content-cell'));
  var ThreedotsList = element(by.css('adf-datatable-cell adf-datatable__actions-cell adf-datatable-center-actions-column-ie ng-star-inserted'));
  var deleteoption = element(by.css('#cdk-overlay-1 button:nth-child(5)'));
  var Newfolderdialogbox = element(by.css('mat-dialog-title-1'));
  var FolderNameList = element(by.css('.adf-expand-cell-5.ng-star-inserted'));
  
    this.clickContenservices = async function() {
      await contentservices.click();
    };

    this.clickCreatefoldericon = async function() {
      await createfoldericon.click();
    };

    this.enterNametextbox = async function(foldername) {
      await nametextbox.clear();
      await nametextbox.sendKeys(foldername);
    };

    this.clickCreatebtn = async function() {
      await createbtn.click();
    };

    this.getValidationMessage = function() {
      return validationmsg.getText();
    };

    this.clickCancelebtn = async function() {
      await cancelbtn.click();
    };

    this.clickFoldernameicon = async function() {
      await foldernameicon.click();
    };

    this.clickthreedots = async function() {
      await threedots.click();
    };

    this.clickDeleteoption = async function() {
      await deleteoption.click();
    };

    this.createfolder = async function(foldername) {
      await contentservices.click();
      await createfoldericon.click();
      await nametextbox.clear();
      await nametextbox.sendKeys(foldername);
      await createbtn.click();
    };

    this.checkfolder = async function() {
      return folderlist.getText();
    };

    this.duplicatefoldercreation = async function(foldername) {
      await createfoldericon.click();
      await nametextbox.clear();
      await nametextbox.sendKeys(foldername);
      await createbtn.click();
    };

    this.newfolderdialogboxPresent = async function(){
      return Newfolderdialogbox.isDisplayed();
    };

    this.deletefolder = async function(){
      for (let i=0; i<FolderNameList.length; i++)
      {
        if(FolderNameList[i].getText().toEqual("Alfresco"))
        {
          ThreedotsList[i].click();
          deleteoption.click();
        }
      }      
    }
};
module.exports = new Homepage();