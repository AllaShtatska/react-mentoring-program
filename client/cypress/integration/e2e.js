describe("e2e tests", ()=>{
    beforeEach(function(){
        cy.visit('http://localhost:8080');
    });
    it ('should display movie details when clicking on movie', ()=>{
        cy.contains('Django unchained').click();
        cy.contains('Django unchained overview');
        cy.contains('Jackie Brown').click();
        cy.contains('Jackie Brown overview');
    });
});