const OrderHistory = require('../pageobjects/OrderHistory.page');
const securePage = require('../pageobjects/secure.page');
const SignupPage = require('../pageobjects/signup.page');
const { faker } = require('@faker-js/faker');

describe('View Order',() => {
    it('should show items ordered', async () =>{
        await browser.url('https://magento.softwaretestingboard.com/');
        await SignupPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await SignupPage.signUp('Rughey', 'Gilzeane', "true", email, 'Rughey1992', 'Rughey1992');
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
        await OrderHistory.checkHistory();
        


    })
})