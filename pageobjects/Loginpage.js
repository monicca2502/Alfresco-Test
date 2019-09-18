var Homepage = require("./Homepage").default;

var Loginpage = function() {
    var Username = element(by.id('username'));
    var Password = element(by.id('password'));
    var SignInbtn = element(by.id('login-button'));

      this.setUsername = async function(name) {
        await Username.sendKeys(name);
      };

      this.setPassword = async function(pass) {
        await Password.sendKeys(pass);
      };

      this.ClickSignIn = async function() {
        await SignInbtn.click();
        return new Homepage();
      };
};
module.exports = new Loginpage();