import LoginPage from '../pages/LoginPage';
import AccountSettingsPage from '../pages/AccountSettingsPage';

describe('Change Password', () => {
  const login = new LoginPage();
  const account = new AccountSettingsPage();

  it('should login and change password successfully', () => {
    const email = 'yourtestemail@gmail.com';
    const oldPass = 'Password@123!';
    const newPass = 'NewPassword456!';

    // Clear session if already logged in
    cy.visit('https://magento.softwaretestingboard.com/customer/account/logout');

    // Step 1: Login
    login.visit();
    login.fillCredentials(email, oldPass);
    login.submit();

    // Step 2: Go to account settings and change password
    account.visit();
    account.changePassword(oldPass, newPass);

    // Step 3: Verify success message
    cy.contains('You saved the account information.').should('be.visible');
  });
});


