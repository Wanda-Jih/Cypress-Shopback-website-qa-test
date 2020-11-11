describe('My First Test', function () {
    it('Does not do much!', function () {
        cy.visit("https://www.baidu.com")

        cy.get("#kw", {timeout: 2000}).type("cypress test")
       
        cy.wait(100)
       
        cy.get("#su", { timeout: 2000 }).click()

    })
})