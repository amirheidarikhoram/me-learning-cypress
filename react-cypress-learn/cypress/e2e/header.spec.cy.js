/* eslint-disable no-undef */

describe("Header Component", () => {
	beforeEach(() => {
		cy.visit("localhost:3000/");
	});

	it("should has link items", () => {
		cy.get("li").should("have.length", 2);
	});

	it("should navigate to todos page", () => {
		cy.contains("Todos").click();

		cy.contains("todos page").should("exist");
	});
});
