describe("Comprueba la pantalla de autenticación", () => {
  it("al introducir la contraseña correcta, se muestra el learning path", () => {
    cy.visit("http://localhost:3000");

    cy.get("input").type("B1k0");

    cy.findByRole("button", { name: /enviar/i }).click();

    cy.findByText(/Pasos del learning path/i).should("exist");
  });
});
