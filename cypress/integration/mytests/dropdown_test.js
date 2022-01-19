describe('drop down feature', ()=>{

    it.skip('with Select tag test', ()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('.optanon-allow-all.accept-cookies-button').click()
        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value', 'India')

        cy.wait(2000)

        cy.get('#Form_submitForm_State')
        .select('Delhi')
        .should('have.value', 'Delhi')

        cy.wait(2000)
    })

    it.skip('Google Search Test', ()=>{

        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click()
        cy.get("[name='q']").type('cypress')

        //cy.get('.wM6W7d')
        //.find('span')
        //.contains('cypress tree').click()

       // birden fazlaya örnek:  cy.get('.erkvQe li span').contains('cypress tree').click()
        cy.get('.wM6W7d span').contains('cypress tree').click()
    })

    it('automation Ecomm Search Test', ()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')

        cy.wait(2000)

        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts').click()

        cy.wait(2000)
    })

})