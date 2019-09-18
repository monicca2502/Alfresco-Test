
var Homepage = function() {
    var Contenservices = element(by.id('Content Services'));
    var Createfoldericon = element(by.id('create-new-folder'));
    var Nametextbox = element(by.id('adf-folder-name-input'));
    var Createbtn = element(by.id('adf-folder-create-button'));
    var Validationmsg = element(by.css('[aria-live="assertive"]'));
    var Foldernameicon = element(by.css('.adf-datatable-content-cell')); //list
    var Threedots = element(by.id('action_menu_right_0'));
    var Deleteoption = element(by.id('DOCUMENT_LIST.ACTIONS.FOLDER.DELETE'));
    const name = "Monicca";

      this.ClickContenservices = async function() {
        await Contenservices.click();
      };

      this.ClickCreatefoldericon = async function() {
        await Createfoldericon.click();
      };

      this.EnterNametextbox = async function(name) {
        await Nametextbox.sendKeys(name);
      };

      this.ClickCreatebtn = async function() {
        await Createbtn.click();
      };

      this.getValidationMessage = function() {
        return Validationmsg.getText();
      };

      this.ClickFoldernameicon = async function() {
        await Foldernameicon.click();
      };

      this.Threedots = async function() {
        await Threedots.click();
      };

      this.ClickDeleteoption = async function() {
        await Deleteoption.click();
      };
};
module.exports = new Homepage();