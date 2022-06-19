/* eslint-disable no-undef */

describe("Main Page", () => {
	it("should get todos of today", () => {
		cy.intercept(
			{
				method: "GET",
				url: "/api/todo/today",
			},
			[
				{
					name: "First Todo",
					dueDate: Date.now().toString(),
					status: false,
				},
			]
		);
		cy.visit("localhost:3000");
		cy.get("#todo").should("have.length", "1");
	});

	it("should get todos of today with one complete and one not complete", () => {
		cy.intercept(
			{
				method: "GET",
				url: "/api/todo/today",
			},
			[
				{
					name: "First Todo",
					dueDate: Date.now().toString(),
					status: false,
				},
				{
					name: "Second Todo",
					dueDate: Date.now().toString(),
					status: true,
				},
			]
		);

		cy.visit("localhost:3000");

		cy.get("#todo>div[data-status='true']").should("have.length", 1);
		cy.get("#todo>div[data-status='false']").should("have.length", 1);
	});
});
