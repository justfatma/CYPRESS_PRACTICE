describe('check element get concept', ()=>{

    it('element get testing', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.get('#onetrust-accept-btn-handler').click()

        cy.contains('Platform').click()

        //cy.url().should('include', '/platform')

        //cy.get('div.align-center.mb-lg h1:nth-of-type(2)')
        cy.get('div.align-center.mb-lg a:nth-of-type(1)')
        .should('be.visible')
        //.and('contain', 'Our platform')
        .and('contain', 'See life at freshworks')
        .and('have.length', 1)

        cy.get('ul.footer-nav li').should('have.length', 23)

        cy.get('ul.footer-nav li')
        .find("a[href*='footer']")
        .should('have.length', 5)

    })

})