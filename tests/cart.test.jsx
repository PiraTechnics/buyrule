import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Cart from "/src/components/Cart";
import { BrowserRouter } from "react-router-dom";
//import userEvent from "@testing-library/user-event";

beforeEach(() => {
	render(
		<BrowserRouter>
			<Cart />
		</BrowserRouter>
	);
});

describe("Cart Component", () => {
	/* it("is hidden by default", () => {
		expect(screen.getByTitle("Cart")).not.toBeVisible();
	}); */

	it("has a title header", () => {
		//screen.debug();
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("has a list of items", () => {
		expect(screen.getByRole("list")).toBeInTheDocument();
	});

	it("has a 'check out' button", () => {
		expect(
			screen.getByRole("button", { name: "Check Out" })
		).toBeInTheDocument();
	});
});

/* describe("When Cart is shown", () => {
	it("has a title header", () => {
		screen.debug();
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("has a list of items", () => {
		expect(screen.getByRole("list")).toBeInTheDocument();
	});

	it("has a 'check out' button", () => {
		expect(
			screen.getByRole("button", { name: "Check Out" })
		).toBeInTheDocument();
	});
});
 */
