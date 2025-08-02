exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addTopsToCart() {
    await this.page.locator('#ui-id-4').hover();
    await this.page.getByRole('menuitem', { name: ' Tops' }).click();

    // Product 1: Breathe-Easy Tank
    const tank = this.page.getByRole('listitem').filter({ hasText: 'Breathe-Easy Tank Rating: 70' });
    await tank.getByLabel('XS').click();
    await tank.getByLabel('Yellow').click();
    await tank.locator('button').click();

    // Product 2: Maya Tunic
    const maya = this.page.getByRole('listitem').filter({ hasText: 'Maya Tunic Rating: 80%' });
    await maya.getByLabel('XS').click();
    await maya.getByLabel('Green').click();
    await maya.locator('button').click();
  }
};
