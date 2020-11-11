// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const addExtensionCommands = require('cypress-browser-extension-plugin/commands');
addExtensionCommands(Cypress);

Cypress.Commands.add('login', (user) => {
    cy.get('.header__auth-btn').click()
    cy.get('.auth__step-content').find('.flex-col').find('.mt-5').children('span').click()
    cy.get('.button-email').click()
    cy.get('[type="input"]').type(user.account)
    cy.get('.rounded-sm').click()   
    cy.get('[type="password"]').type(user.password)  
    cy.get('.rounded-sm').click() 
    cy.wait(3000)
    
})

Cypress.Commands.add('logout',()=>{
    cy.get('a[href="/logout"]').click({force: true})
    cy.wait(2000)
})

