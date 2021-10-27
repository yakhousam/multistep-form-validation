describe("MultiStepForm", () => {
  it("should fill the steps and submit the form", () => {
    cy.visit("/");
    cy.findByLabelText(/^location$/i).type("Timezrit");
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByLabelText(/first name/i).type("Khoudir");
    cy.findByLabelText(/last name/i).type("Yaya");
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByLabelText(/^license$/i).type("my license");
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByLabelText(/^vehicle$/i).type("VW");
    cy.findByRole("button", { name: /next/i }).click();
  });
});
