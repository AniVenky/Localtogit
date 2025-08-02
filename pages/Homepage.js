exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.createAccountLink = page.getByRole('link', { name: 'Create an Account' });
  }

  async goto() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

  async clickCreateAccount() {
    await this.createAccountLink.click();
  }
};
