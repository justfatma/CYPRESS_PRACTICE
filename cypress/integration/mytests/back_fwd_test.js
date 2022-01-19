describe('back and fwd button simulate', ()=>{

    it('back-fwd test', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.get('#onetrust-accept-btn-handler').click()

        cy.contains('Customers').click()
        .go('back')
        .go('forward')

    //    cy.go('back')
    //    //cy.go(-1)  back ile aynı anlamda
    //    cy.wait(200)
    //    cy.go('forward')
    //    //cy.go(1)  forward ile aynı anlamda
    })

})