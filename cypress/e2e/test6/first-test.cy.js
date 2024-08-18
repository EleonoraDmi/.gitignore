describe('Verify Browser Stack Home Page', () => {
    it('Verify Browserstack logo i visible', () => {
        cy.visit('https://www.browserstck.com/');
        cy.get('#logo').should('be.visible');
    })
    it('Verify Header is present', () => {
        cy.get('h1').first().should('be.exist');
    })
    it('Verify Product menu are present', () => {
        cy.get('#product-menu-toggle').first().should('be.exist');
        cy.get('#developers-menu-toggle').should('be.exist');
        cy.get('#developers-menu-toggle').should('be.exist');
    
        
})