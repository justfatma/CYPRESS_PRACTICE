describe('launch my app', () => {

    it('app testing', () => {

        cy.visit('https://www.freshworks.com/')
        
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('Platform')
        cy.contains('Platform').click()
        //cy.url().should('include', '/platform')
        
    })
}

)