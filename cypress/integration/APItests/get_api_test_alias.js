describe('API testing with alias', ()=>{

 //   beforeEach(()=>{
 //       cy.request('/users?page=2').as('users')
 //   })

    beforeEach(()=>{
        cy.request('/posts').as('posts')
    })

    it('validate the header info', () => {
        cy.get('@posts')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });

    it('validate the status code', ()=>{
        cy.get('@posts')
        .its('status')
        .should('equal', 200)
    });

    it('validate the total pages in the body', ()=>{
        cy.get('@posts')
        .its('body').then((res)=>{
            expect(res.meta.pagination).has.property('pages', 70)
        })
    });

    it('validate the user info in data json array', ()=>{
        cy.get('@posts')
        .its('body').then((res)=>{
            expect(res.data[0]).has.property('id', 22)
        })
        
    });
})