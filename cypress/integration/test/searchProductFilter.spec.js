// const { should } = require("chai")
import users from "../../../helper/user";
import url from "../../../helper/url";

// only for TW site
describe('頁面測試', ()=>{

    //choose country site
    beforeEach('openWeb',() =>cy.visit(url.TW))
    afterEach(() => cy.clearCookies())


    //case id:C651
    //Verify product page filter with only price min and max
    it.skip('filter_price_min_max',()=>{
        var lowPrice="100"
        var highPrice="1000"
        var originAmount,narrowAmount
        cy.get('[placeholder="搜尋商品和商家"]').type(product).type('{enter}')
        cy.get('.product-listing-header>div>div').next().invoke('text').then(($amount)=>{
            originAmount=$amount.replace(/[^\d.]/g,"")
        })
        //narrow down the product listing only by price min
        cy.get('[placeholder="NT$ 最低價格"]').type(lowPrice)
        cy.get('.submit-filter-button').click()
        cy.wait(1500);
        cy.get('.product-listing-header>div>div').next().invoke('text').then(($amount)=>{
            narrowAmount=$amount.replace(/[^\d.]/g,"")
            expect(originAmount>=narrowAmount).to.true
        })

        //narrow down the product listing only by price max
        cy.get('[placeholder="NT$ 最低價格"]').clear()
        cy.get('[placeholder="NT$ 最高價格"]').type(highPrice)
        cy.get('.submit-filter-button').click()
        cy.wait(1500);
        cy.get('.product-listing-header>div>div').next().invoke('text').then(($amount)=>{
            narrowAmount=$amount.replace(/[^\d.]/g,"")
            expect(originAmount>=narrowAmount).to.true
        })

        //narrow down the product listing combine by price min and max
        cy.get('[placeholder="NT$ 最低價格"]').type(lowPrice)
        cy.get('.submit-filter-button').click()
        cy.wait(1500);
        cy.get('.product-listing-header>div>div').next().invoke('text').then(($amount)=>{
            narrowAmount=$amount.replace(/[^\d.]/g,"")
            expect(originAmount>=narrowAmount).to.true
        })
    })

    //case id:C652
    //Verify product page filter with price min and max using not number characters
    it.skip('filter_price_garbled',()=>{
        var garbled="a?!+}{@#$$(&*許"
        cy.get('[placeholder="搜尋商品和商家"]').type(product).type('{enter}')
        cy.get('[placeholder="NT$ 最低價格"]').type(garbled).then
        cy.get('.text-red-600').should('be.visible')
        cy.get('.submit-filter-button').should('be.disabled')

        cy.get('[placeholder="NT$ 最低價格"]').clear()
        cy.get('[placeholder="NT$ 最高價格"]').type(garbled).then
        cy.get('.text-red-600').should('be.visible')
        cy.get('.submit-filter-button').should('be.disabled')
        
        cy.get('[placeholder="NT$ 最低價格"]').type(garbled).then
        cy.get('.text-red-600').should('be.visible')
        cy.get('.submit-filter-button').should('be.disabled')       
            

    })


})


