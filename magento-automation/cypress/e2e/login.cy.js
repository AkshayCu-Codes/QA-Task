import LoginPage from '../pages/LoginPage';

describe('User Login', () => {
  const login = new LoginPage();

  it('should login successfully using credentials from fixture', () => {
    cy.fixture('credentials.json').then((creds) => {
      login.visit();
      login.fillCredentials(creds.email, creds.password);
      login.submit();

      cy.get('.panel.header').should('contain.text', 'Welcome');
    });
  });
});
