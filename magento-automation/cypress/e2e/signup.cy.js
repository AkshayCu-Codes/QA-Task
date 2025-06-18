import SignupPage from '../pages/SignupPage';

describe('User Signup', () => {
  const signup = new SignupPage();

  const emailId = 'yourtestemail@gmail.com';
  const password = 'Password@123!';

  it('should sign up successfully', () => {
    signup.visit();
    signup.fillForm('Test', 'User', emailId, password);
    cy.wait(1000);
    signup.submit();
    cy.wait(1000);

    cy.get('.message-success').should('contain.text', 'Thank you for registering');
  });
});
