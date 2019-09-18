var Loginpage = require('./Loginpage');

var Settingpage = function() {
    var providerdropbox = element(by.css('.mat-select-arrow-wrapper div'));
    var ECMprovideroption = element(by.id('mat-option-1'));
    var Applybtn = element(by.id('host-button'));

    this.get = async function() {
        await browser.get('http://qaexercise.envalfresco.com/settings');
      };

      this.ECMSelect = async function() {
        await providerdropbox.click();
        await ECMprovideroption.click();
      };

      this.ClickApply = async function() {
        await Applybtn.click();
        return new Loginpage();
      };
};
module.exports = new Settingpage();