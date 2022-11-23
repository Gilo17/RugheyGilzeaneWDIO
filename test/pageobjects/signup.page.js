

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputfirstName () {
        return $('#firstname');
    }

    get inputlastName () {
        return $("#lastname");
    }

    get checkBox () {
        return $("#is_subscribed");
    }

    get inputEmail () {
        return $('#email_address')
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword (){
        return $("#password-confirmation")
    }

    get btnSubmit () {
        return $("button[title='Create an Account'] span");
    }

    get ConfirmMessage () {
        return $("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']")
    }

    get errormsg() {
        return $('#password-error');
   }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signUp (firstName, lastName, checkBox, email, Password, ConfirmPasssword) {
        await this.inputfirstName.setValue(firstName);
        await this.inputlastName.setValue(lastName);
        await this.checkBox.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(Password);
        await this.inputConfirmPassword.setValue(ConfirmPasssword)
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signUp');
    }

   
}

module.exports = new SignUpPage();
