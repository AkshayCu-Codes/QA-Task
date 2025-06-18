import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

describe('User Logout', () => {
  const login = new LoginPage();
  const account = new AccountPage();

  it('should log out successfully', () => {
    // Step 1: Login
    login.visit();
    login.fillCredentials('yourtestemail@gmail.com', 'Password@123!');
    login.submit();

    // Step 2: Confirm login
    cy.get('.panel.header').should('contain.text', 'Welcome');

    // Step 3: Logout
    account.logout();

    // Step 4: Verify logout success URL
    cy.url().should('include', 'customer/account/logoutSuccess');

    // Step 5: Wait for redirect and confirm homepage
    cy.wait(6000); // Wait for the auto-redirect
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/');
  });
});
