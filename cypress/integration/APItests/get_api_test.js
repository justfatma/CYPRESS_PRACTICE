describe('GET API for Rest', ()=>{

    it("GET API Test for Flask - Motorbike", ()=>{
        cy.request('GET', 'https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.product[0]).has.property('price', 599.99)
            expect(res.body.product[0]).has.property('product', 'motorbike')
        })
    })

    it("GET API Test for Flask - users", ()=>{
        cy.request('GET','https://flask-rest-api-demo.herokuapp.com/users').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.users[0]).has.property('username', 'test_1')
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users).has.length(5)
            expect(res.body.users[0]).not.have.property('price')
        })
    })

    
    it("GET API Test for Go Res API - Users", () =>{
        cy.request('GET', 'https://gorest.co.in/public/v1/posts').then((res) =>{
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('id', 22)
            expect(res.body.data[1]).has.property('title', 'c')
            expect(res.body.data).has.length(20)
        })
    })
})