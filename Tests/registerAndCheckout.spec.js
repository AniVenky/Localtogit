const { test, expect } = require('@playwright/test');
const { generateRandomEmail } = require('../utils/emailGenerator');
const { HomePage } = require('../pages/Homepage');
const { RegisterPage } = require('../pages/RegisterPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('@smoke Register and Checkout flow', async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegisterPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  const email = generateRandomEmail();
  const password = 'test@1234';

  await home.goto();
  await home.clickCreateAccount();

  await register.register('Test1', 'Test1', email, password);

  await product.addTopsToCart();
  await cart.goToCart();
  await cart.proceedToCheckout();
  await checkout.fillShippingAddress();
});
