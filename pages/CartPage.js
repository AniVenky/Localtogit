exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.getByRole('link', { name: /My Cart/i }).click();
  }

  async proceedToCheckout() {
    await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  }
};
