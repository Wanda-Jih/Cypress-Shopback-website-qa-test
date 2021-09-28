// const { should } = require("chai")
import users from "../../../helper/user";
import url from "../../../helper/url";

describe('頁面測試', ()=>{

    //choose country site
    beforeEach('openWeb',() =>cy.visit(url.TW))
    afterEach(() => cy.clearCookies())


    it('login',()=>{
        //cypress/support/commands.js
        //helper/user.js
        cy.login(users.userTW2)
    })
    
    // search the specific item
    // verifying the display is correct.
    const product="iphone" 
    it.skip('search product loop',()=>{
        cy.get('.react-autosuggest__container').find('input').type(product).type('{enter}')

        cy.get('.w-full').each(($item)=>{

            //check title
            if($item.find('.d-flex>h3').text()!=""){
                expect($item.find('.d-flex>h3').text().toLowerCase()).includes(product)
            }

            //check price
            var priceTitle=$item.find('.sale-price').text()
            var price,lowPrice,highPrice
            //if it is product group
            if(priceTitle.indexOf('-')!=1){
                price=priceTitle.split('-',2)
                if(price!=""){
                    lowPrice=price[0].replace(/[^\d.]/g,"")
                    highPrice=price[1].replace(/[^\d.]/g,"")
                    expect(lowPrice<highPrice).to.true //這裡報錯
                }
            }
            else{
                expect(priceTitle).exist
            }

            //check cashback
            if($item.find('.cashback-pill>span').text()!=""){
                //cy.log($item.find('.cashback-pill>span').text())
                expect($item.find('.cashback-pill>span').text()).exist
            }
        })

        //check photo
        cy.get('.load-end').first().should('be.visible')
    })

})


