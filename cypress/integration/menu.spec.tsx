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

  it.only("should support adding a menu item and displaying it on the home page", () => {
    cy.findByText("Admin").click();
    cy.findByLabelText("Name").type("Glazed donut");
    cy.findAllByLabelText("Description").type("Tasty");
    cy.findByLabelText("Price").type("1");
    cy.findByRole("button", { name: "Save Menu Item" }).click();
    cy.url().should("eq", "http://localhost:3000/"); // make sure the redirect worked.
    cy.findAllByText("Glazed donut");
  });
});
