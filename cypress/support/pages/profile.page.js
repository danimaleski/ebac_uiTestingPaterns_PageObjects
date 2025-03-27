/// <reference types="Cypress" />

export const profilePage = {
    customerName: () => { return cy.get('[data-testid="CustomerName"]') } //como não é classe, não consegue ser utilizado o get
}