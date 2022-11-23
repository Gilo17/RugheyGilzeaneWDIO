



const securePage = require('../pageobjects/secure.page');
const SignupPage = require('../pageobjects/signup.page');
const { faker } = require('@faker-js/faker');



describe('My SignUp application', () => {
    it("should sign up with valid credentials", async () => {
        await SignupPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await SignupPage.signUp('Rughey', 'Gilzeane', 'true', email, 'Rughey1992', 'Rughey1992');
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.')
       




    });



})
