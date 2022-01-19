describe('mouse over feature', ()=>{

    //sayfa değiştiği için aşağıdaki ilk iki metot artık çalışmıyor
    it.skip('click on sign up Link Test', ()=>{    
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
    })

    it.skip('click on Member Login Link Test', ()=>{      
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click()
    })

    it('Add to Chart Test', ()=>{      
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.wait(2000);
        cy.get('.cross').click()
        cy.wait(2000);
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.wait(2000);
        cy.get('#button_order_cart').click()
        cy.url().should('include', 'controller=order')
        cy.wait(2000);
    })



})