import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

describe('User Logout', () => {
  const login = new LoginPage();
  const account = new AccountPage();

  it('should log out successfully using fixture credentials', () => {
    cy.fixture('credentials.json').then((creds) => {
      login.visit();
      login.fillCredentials(creds.email, creds.password);
      cy.wait(5000);
      login.submit();
      cy.wait(5000);

      cy.get('.panel.header').should('contain.text', 'Welcome');

      account.logout();

      cy.url().should('include', 'customer/account/logoutSuccess');

      cy.wait(5000);
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/');
    });
  });
});
