import SignupPage from '../pages/SignupPage';

describe('User Signup', () => {
  const signup = new SignupPage();

  // Generate unique email
  const timestamp = Date.now();
  const emailId = `testuser${timestamp}@mailinator.com`;
  const password = 'Password@123!';

  it('should sign up successfully and save credentials', () => {
    signup.visit();
    signup.fillForm('Test', 'User', emailId, password);
    cy.wait(1000);
    signup.submit();
    cy.wait(1000);

    cy.get('.message-success')
      .should('contain.text', 'Thank you for registering')
      .then(() => {
        // Saveing credentials for future tests
        cy.writeFile('cypress/fixtures/credentials.json', {
          email: emailId,
          password: password
        });
      });
  });
});
