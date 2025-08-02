exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillShippingAddress() {
    await this.page.getByRole('textbox', { name: 'Street Address: Line 1' }).fill('test');
    await this.page.getByRole('textbox', { name: 'Street Address: Line 2' }).press('Tab');
    await this.page.getByRole('textbox', { name: 'Street Address: Line 3' }).press('Tab');
    await this.page.getByRole('textbox', { name: 'City *' }).fill('test');
  }
};
