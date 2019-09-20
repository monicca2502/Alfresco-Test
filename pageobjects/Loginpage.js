  var Loginpage = function() {
  var Username = element(by.id('username'));
  var Password = element(by.id('password'));
  var SignInbtn = element(by.id('login-button'));

    this.setUsername = async function(name) {
      await Username.clear();
      await Username.sendKeys(name);
    };

    this.setPassword = async function(pass) {
      await Password.clear();
      await Password.sendKeys(pass);
    };

    this.ClickSignIn = async function() {
      await SignInbtn.click();      
    };

    this.login = async function(uname, pass){
      await Username.clear();
      await Username.sendKeys(uname);
      await Password.clear();
      await Password.sendKeys(pass);
      await SignInbtn.click();
    }
};
module.exports = new Loginpage();