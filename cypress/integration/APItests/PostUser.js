/// <reference types="Cypress" />
const dataJson = require('../../fixtures/createuser')

describe('post user request', () => {
let accessToken = 'd0555006dabf4a10cdd0bb53ce45cbe5f726487ba8cf0131be07d0ffb39a105c'
let randomText = ""
let testEmail = ""

    it.only('create user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

                    
        //1. create user (POST)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": dataJson.name,
                "gender": dataJson.gender,
                "email": testEmail,
                "status":dataJson.status
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))   //show response data
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('name',dataJson.name)
            expect(res.body.data).has.property('status',dataJson.status)
            expect(res.body.data).has.property('gender',dataJson.gender)
        }).then((res) =>{
                const userId = res.body.data.id 
                cy.log("user id is: " + userId)   //show user id on screen
                //2. get user (GET)           get the inserted user to check fields
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('id', userId)
                    expect(res.body.data).has.property('name',dataJson.name)
                    expect(res.body.data).has.property('status',dataJson.status)
                    expect(res.body.data).has.property('email', testEmail)
                })
        })
        
    })
})