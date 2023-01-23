
describe('The Home Page', () => {

  // it('successfully loads', () => {
  //   cy.visit('/') // change URL to match your dev URL // config the baseURL in the config file
  // })

  // it('show the po number box when click the pay invoice button', () => {
  //   cy.visit('/')
  //   cy.get('h2').contains('Pay An Invoice').click()
  //   cy.get('#pay-invoice').should('be.visible')

  //   cy.get('#pay-invoice').type('12345{enter}').submit()
  //   cy.location('pathname').should('eq', '/pay-invoice/12345')
  // })

  it('should login when click login button', ()=> {
    cy.visit('/');
    cy.get('h2').contains('Freelancer').click();
    cy.origin(
      'https://dev-y7p4by61pf1424zx.us.auth0.com',
      { args: { username: 'verena0915@gmail.com', password: 'Wzy970713' } },
      ({ username, password }) => {
        cy.get('input#username').type(username)
        cy.get('input#password').type(password, { log: false })
        cy.contains('button[value=default]', 'Continue').click()
      }
    )
  })

  // it("the dashboard page loads the correct profile", () => {
  //   cy.visit('http://localhost:3000/members-only');
  //   cy.origin(
  //     'https://dev-y7p4by61pf1424zx.us.auth0.com',
  //     { args: { username: 'verena0915@gmail.com', password: 'Wzy970713' } },
  //     ({ username, password }) => {
  //       cy.get('input#username').type(username)
  //       cy.get('input#password').type(password, { log: false })
  //       cy.contains('button[value=default]', 'Continue').click()
  //     }
  //   )

  //   cy.get('a[href="/members-only/create-invoice"]').click();
  //   cy.url().should('include', '/members-only/create-invoice');

  //   cy.get('a[href="/members-only/invoice-list"]').click();
  //   cy.url().should('include', '/members-only/invoice-list');

  //   cy.get('a[href="/members-only/clients"]').click();
  //   cy.url().should('include', '/members-only/clients');
  // })


  // it("show the invoice list", () => {
  //   cy.visit('http://localhost:3000/members-only/invoice-list')
  // })

})
