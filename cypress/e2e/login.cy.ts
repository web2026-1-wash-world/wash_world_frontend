describe("Login", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it("logger brugeren ind og sender videre til dashboard", () => {
    cy.intercept("POST", "**/login", {
      statusCode: 200,
      body: {
        message: "Login successful",
        access_token: "fake-token-123",
        user: {
          user_first_name: "Rasmus",
          user_last_name: "Meinche",
          user_email: "test@test.dk",
        },
      },
    }).as("loginRequest");

    cy.visit("/login");

    cy.get('[data-cy="email-input"]').type("test@test.dk");
    cy.get('[data-cy="password-input"]').type("12345678");
    cy.get('[data-cy="login-button"]').click();

    cy.wait("@loginRequest");

    cy.url().should("include", "/dashboard");

    cy.window().then((win) => {
      expect(win.localStorage.getItem("access_token")).to.eq("fake-token-123");
      expect(win.localStorage.getItem("user")).to.contain("test@test.dk");
    });
  });

  it("viser fejlbesked ved forkert login", () => {
    cy.intercept("POST", "**/login", {
      statusCode: 401,
      body: {
        error: "Forkert email eller adgangskode",
      },
    }).as("loginRequest");

    cy.visit("/login");

    cy.get('[data-cy="email-input"]').type("forkert@test.dk");
    cy.get('[data-cy="password-input"]').type("wrongpassword");
    cy.get('[data-cy="login-button"]').click();

    cy.wait("@loginRequest");

    cy.get('[data-cy="login-error"]').should(
      "contain",
      "Forkert email eller adgangskode"
    );

    cy.url().should("include", "/login");
  });

  it("viser besked fra URL query parameter", () => {
    cy.visit("/login?message=Bruger%20oprettet");

    cy.get('[data-cy="success-message"]').should(
      "contain",
      "Bruger oprettet"
    );
  });

  it("linker til glemt password siden", () => {
    cy.visit("/login");

    cy.get('[data-cy="forgot-password-link"]').click();

    cy.url().should("include", "/forgot-password");
  });
});