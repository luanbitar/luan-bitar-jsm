describe("app", () => {
  it("works", () => {
    cy.visit("/")
      .findByText(/trabalhoso/i)
      .click({ force: true })
      .findByText(/buscando/i)
  })
})
