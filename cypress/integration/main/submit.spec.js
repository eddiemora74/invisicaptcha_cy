describe("main test", () => {
  it("clicks the submit button", () => {
    cy.visit("https://invisicaptcha--eddiemora74.repl.co/");
    cy.get("#submit").click();
    cy.get("iframe[title='recaptcha challenge']").should("be.visible");
  });
});
