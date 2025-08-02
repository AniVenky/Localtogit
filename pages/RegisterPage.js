exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByRole('textbox', { name: 'First Name*' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name*' });
    this.email = page.getByRole('textbox', { name: 'Email*' });
    this.password = page.getByRole('textbox', { name: 'Password*', exact: true });
    this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password*' });
    this.createButton = page.getByRole('button', { name: 'Create an Account' });
  }

  async register(firstName, lastName, email, password) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.createButton.click();
  }
};
