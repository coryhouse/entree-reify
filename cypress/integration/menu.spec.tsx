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

    // 1. Support delete via the UI
    // 2. Call a function via devTools
    // 3. Expose a function on window that sends a delete to the mock API
    // 4. Reset the database after this test
    cy.findAllByText("Glazed donut");
  });
});
