import LoginPage from '../pages/LoginPage';

describe('User Login', () => {
  const login = new LoginPage();

  it('should login successfully', () => {
    login.visit();
    login.fillCredentials('yourtestemail@gmail.com', 'Password@123!');
    login.submit();

    cy.get('.panel.header').should('contain.text', 'Welcome');
  });
});
