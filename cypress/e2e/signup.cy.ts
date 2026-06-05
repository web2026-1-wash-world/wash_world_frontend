describe("Sign up", () => {
  it("opretter en bruger", () => {
    cy.intercept("POST", "**/sign-up", {
      statusCode: 200,
      body: {
        message: "Bruger oprettet",
      },
    }).as("signUpRequest");

    cy.visit("/sign-up");

    cy.get('[data-cy="first-name-input"]').type("Rasmus");
    cy.get('[data-cy="last-name-input"]').type("Meinche");
    cy.get('[data-cy="signup-email-input"]').type("test@test.dk");
    cy.get('[data-cy="signup-password-input"]').type("12345678");

    cy.get('[data-cy="signup-button"]').click();

    cy.wait("@signUpRequest");

    cy.get('[data-cy="signup-success"]').should(
      "contain",
      "Bruger oprettet"
    );
  });

  it("viser fejl hvis backend returnerer fejl på fornavn", () => {
    cy.intercept("POST", "**/sign-up", {
      statusCode: 400,
      body: {
        field: "user_first_name",
        error: "Fornavn skal være mindst 2 tegn",
      },
    }).as("signUpRequest");

    cy.visit("/sign-up");

    cy.get('[data-cy="first-name-input"]').clear().type("Rasmus");
    cy.get('[data-cy="last-name-input"]').clear().type("Meinche");
    cy.get('[data-cy="signup-email-input"]').clear().type("test2@test.dk");
    cy.get('[data-cy="signup-password-input"]').clear().type("12345678");

    cy.get('[data-cy="signup-button"]').should("not.be.disabled").click();

    cy.wait("@signUpRequest");

    cy.get('[data-cy="first-name-error"]').should(
      "contain",
      "Fornavn skal være mindst 2 tegn"
    );
  });
});