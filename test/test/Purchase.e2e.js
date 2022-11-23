const purchaseProducts = require('../pageobjects/purchaseProducts.page');
const addToCart = require('../pageobjects/addToCart.page');
const securePage = require('../pageobjects/secure.page');
const SignupPage = require('../pageobjects/signup.page');
const { faker } = require('@faker-js/faker');
describe('My Purchased Item', () => {
    it('should allow items in cart to be purchased', async () => {
        await browser.url('https://magento.softwaretestingboard.com/');
        await SignupPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await SignupPage.signUp('Rughey', 'Gilzeane', "true", email, 'Rughey1992', 'Rughey1992');
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
        await $('#ui-id-4').click();
        await addToCart.addItemToCart();
        await purchaseProducts.counterNumber.waitForClickable();
        await purchaseProducts.btnCartInfo.click();
        await purchaseProducts.btnCheckOut.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#shipping');
        await purchaseProducts.orderItem('Rughey', 'Gilzeane', "Lauderdale", 'Broward', 'Florida', '00000', 'United States', '8765556633');
        await browser.url('https://magento.softwaretestingboard.com/checkout/#payment');
        await purchaseProducts.placeOrder.waitForDisplayed();
        await purchaseProducts.placeOrder.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/');
        await expect(purchaseProducts.sucessPage).toHaveText('Thank you for your purchase!');
        // await browser.debug();
    });
});

