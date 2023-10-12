import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "/src/components/Header";

beforeEach(() => {
	render(<Header />);
});

describe("Header Component", () => {
	it("renders title headline", () => {
		screen.debug();
		expect(screen.getByRole("heading").textContent).toMatch(/Buy-Rule/i);
	});

	it("has nav links to home and shopping", () => {
		expect(screen.getAllByRole("link").length).toBe(2);
	});
});
