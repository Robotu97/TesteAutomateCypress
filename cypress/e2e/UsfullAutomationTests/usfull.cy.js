describe('Exemplu unde', () => {

        /*  //Test veriificare segment din URL
            it('verific daca un URL contine ceva', () => {
            cy.visit('https://www.digi24.ro/stiri/sci-tech/bill-gates-explica-felul-in-care-ne-va-schimba-viata-inteligenta-artificiala-in-urmatorii-5-ani-2652563')
            cy.url().should('include', '/stiri/') // verifica un segment
            })  */


            //Testul cu delayp
        /*     it('astepta 10 secunde', () => {
            cy.visit('https://www.google.com');

            cy.get('#L2AGLb').click();

            cy.wait(10000); // 10 secunde

            cy.get('.gLFyf').type('Au trecut 10 secunde')
        }) 
        */


        // Testul cu selector de timp atribut
      /*   it('selectez folosind un atribut', () => {
        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();

        cy.get('[alt="Google"]').should('be.visible'); //Selector atributr alt + assertion cu visible
        }) */


        //Testul screenshot pagina
       /*  it('fac un screenshot la pagina', () => {
        cy.visit('https://www.google.com');
        
        cy.screenshot(); // Face un screenshot intr-un folder default
        }) */

        // Testul constanta si verificare continut input
       /*  it('verific o valoare din input', () => {

            cy.visit('https://www.google.com');

            cy.get('#L2AGLb').click(); 
            const googleSearch = cy.get('.gLFyf'); // constanta

            googleSearch.type('123');
            googleSearch.should('have.value', '123') // Assertion contine textul
        }) */


        // Testul verifica existenta unei clase pe un element selectat
        /* it('verific o valoare din input', () => {
            
            cy.visit('https://www.libris.ro/');

            cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); // Exista clasa pe buton?
        }) */





})