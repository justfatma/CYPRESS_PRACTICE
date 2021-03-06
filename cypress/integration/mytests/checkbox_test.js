describe('Category page tests', ()=>{

    it('Category page on automation practice - checkbox test', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        //check the checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class', 'checked')

        //uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')
    })


    it.only('SnapDeal Page - filter checkbox test', ()=>{
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.contains('Search').click()

        //check
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
          .check({force: true})
        //assertion
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
          .should('have.checked', 'checked')


        //unchecked
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
          .uncheck({force: true})
        //assertion
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
          .should('not.have.checked', 'checked')
    })
})