/// <reference types="cypress" />

describe("menu app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display Menu heading", () => {
    cy.findByText("Menu");
  });

  it("should show the menu items", () => {
    cy.findByText("Chicken Tikka Masala");
    cy.findByText("BBQ Ribs");
  });
});
