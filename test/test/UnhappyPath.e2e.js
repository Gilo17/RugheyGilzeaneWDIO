const signupPage = require('../pageobjects/signup.page');
const SignupPage = require('../pageobjects/signup.page');

it('should not sign up with a password < 8 characters', async () => {
    await signupPage.open();
    await signupPage.signUp("Rughey", "Gilzeane", "true", "grughey1992@mail.com","Rughey", "Rughey");
    await   expect(signupPage.errormsg).toHaveTextContaining('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
})