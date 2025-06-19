import SignupPage from '../pages/SignupPage';

describe('User Signup', () => {
  const signup = new SignupPage();

  const newEmail = `user${Date.now()}@mailinator.com`;
  const existingEmail = 'yourtestemail@gmail.com';
  const password = 'Password@123!';

  it('should sign up successfully with a new email', () => {
    signup.visit();
    signup.fillForm('Test', 'User', newEmail, password);
    cy.pause();
    signup.submit();
    cy.pause();

    cy.contains('Thank you for registering').should('be.visible');
    cy.pause();
    cy.writeFile('cypress/fixtures/credentials.json', {
      email: newEmail,
      password: password
    });
  });

  it('should show error when signing up with existing email', () => {
    signup.visit();
    signup.fillForm('Test', 'User', existingEmail, password);
    cy.pause();
    signup.submit();
    cy.pause(); 
    cy.contains('There is already an account with this email address').should('be.visible');
  });
});
