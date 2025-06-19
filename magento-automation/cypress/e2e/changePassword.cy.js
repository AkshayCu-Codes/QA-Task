import LoginPage from '../pages/LoginPage';
import AccountSettingsPage from '../pages/AccountSettingsPage';

describe('Change Password', () => {
  const login = new LoginPage();
  const account = new AccountSettingsPage();

  it('should login with old password, change to new one, and save it', () => {
    cy.fixture('credentials.json').then((creds) => {
      const email = creds.email;
      const oldPass = creds.password;
      const newPass = 'NewPassword@456!'; 

      cy.visit('https://magento.softwaretestingboard.com/customer/account/logout')

      //Login
      login.visit();
      login.fillCredentials(email, oldPass);
      cy.pause();
      login.submit();
      cy.pause();

      //Change password
      account.visit();
      cy.pause();
      account.changePassword(oldPass, newPass);
      cy.pause();

      // Verify success message
      cy.contains('You saved the account information.').should('be.visible').then(() => {
        // Update fixture with new password
        cy.writeFile('cypress/fixtures/credentials.json', {
          email: email,
          password: newPass
        });
        cy.wait(5000);
      });
      cy.pause();

      //Verify re-login with new password
      cy.visit('https://magento.softwaretestingboard.com/customer/account/logout');
      
      login.visit();
      login.fillCredentials(email, newPass);
      cy.wait(5000);
      login.submit();

      cy.get('.panel.header').should('contain.text', 'Welcome');
      cy.get('.customer-welcome').first().click();
      cy.contains('Sign Out').should('be.visible').click();
      cy.pause();

      cy.visit('https://magento.softwaretestingboard.com/');
      cy.pause();
    });
  });
});
