// const { should } = require("chai")
import users from "../../../helper/user";
import url from "../../../helper/url";

describe('頁面測試', ()=>{

    //choose country site
    const countrySite=url.TW
    const product="iphone" //product="純萃保濕化妝水200ml"
    before('openWeb',() =>cy.visit(countrySite))
    after(() => cy.clearCookies())

    it('search bar',()=>{

        //not login user-Refer, earn $
        cy.get('.header__raf-btn').click()
        if(cy.get('.header__auth-btn').contains('/')){
            cy.url().should('contains','/login')
            
        }
        else{
            cy.url().should('contains','/referral/invite')
        }
        cy.get('.header__logo-img').click()
        
        //login
        cy.login(users.userTW2)
        cy.url().should('contains','shopback.com.tw')

        //search product
        cy.get('.react-autosuggest__container').find('input').type(product).type('{enter}')
        cy.get('.logo').click()
        cy.url().should('contains','shopback.com.tw')

        //How to earn cashback
        cy.get('.header-how-it-works-guide').click({force: true})
        cy.url().should('contains','/how-it-works')
        cy.get('.header__logo-img').click()


    })






    
    it.skip('login',()=>{
        //cypress/support/commands.js
        //helper/user.js
        //choose user
        cy.login(users.userTW2)
        
    })
 
    //const product="iphone" //product="純萃保濕化妝水200ml"
    it.skip('search product',()=>{
        //點擊logo
        cy.get('.react-autosuggest__container').find('input').type(product).type('{enter}')
        cy.get('.logo').click()
    })

    it.skip('How to earn cashback',()=>{
        cy.get('.header-how-it-works-guide').click({force: true})
        cy.url().should('contains','/how-it-works')
        cy.get('.header__logo-img').click()
        
    })

    it.skip('Refer, earn $',()=>{
        cy.get('.header__raf-btn').click()
        if(cy.get('.header__auth-btn').contains('/')){
            cy.url().should('contains','/login')
            
        }
        else{
            cy.url().should('contains','/referral/invite')
        }
        cy.get('.header__logo-img').click()
        
    })


})



