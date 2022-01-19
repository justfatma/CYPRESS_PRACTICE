/// <reference types="Cypress" />

describe('api test cases',() => {
    var payload = ""
    let accesstoken= 'd0555006dabf4a10cdd0bb53ce45cbe5f726487ba8cf0131be07d0ffb39a105c'
    
    it('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/123/posts',
            headers: {
                'Authorization': 'Bearer ' + accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).has.property('limit',20)
            expect(res.body).has.to.deep.equal({
                "code": 200,
                "meta": {
                    "pagination": {
                        "total": 0,
                        "pages": 0,
                        "page": 1,
                        "limit": 20
                    }
                },
                "data": []
                })
        })
    })

    it('get user by id', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/16',
            headers: {
                'authorization': 'Bearer ' + accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Kumar')
        })    
    })  
})