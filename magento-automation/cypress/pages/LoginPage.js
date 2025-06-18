class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  }

  fillCredentials(email, password) {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
  }

  submit() {
  cy.get('form#login-form').first().within(() => {
    cy.get('button#send2')
      .should('be.visible')
      .click();
  });
}
}

export default LoginPage;
