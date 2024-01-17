describe('On Linkedin',() => {

it('I can login', () => {
     cy.visit('https://linkedin.com');

     cy.get('[action-type="ACCEPT"]').click();

     cy.get('.nav__button-secondary').click();

     cy.get('#username').type('email');

     cy.get('#password').type('parola');

     cy.get('.btn__primary--large').click();

     cy.get('#ember13').should('exist');

     
})

})