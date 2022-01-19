describe('hub spot page feature', () => {

    it('handle hub spot login test', ()=>{
        cy.visit('http://automationpractice.com/', {failOnStatusCode: false})
        cy.get('.login').click()
        cy.get('#email').type('practice.fatma@gmail.com')
        cy.get('#passwd').type('practice1901')
        cy.get('#SubmitLogin').click()
    })

})