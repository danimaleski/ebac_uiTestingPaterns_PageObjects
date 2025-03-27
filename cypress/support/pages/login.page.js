/// <reference types="Cypress" />

class LoginPage {
    get #email() { return cy.get('[data-testid="email"]')} //usar # para ser privado, quero somente as formas de interagir com a página e não os elementos em si (não vai aparecer no arquivo de Teste)
    get #password() { return cy.get('[data-testid="password"]')}
    get #btnLogin() { return cy.get('[data-testid="btnLogin"]')}

    login(email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#btnLogin.click()
    }
}

module.exports = new LoginPage();