import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "/src/components/Header";
import { BrowserRouter } from "react-router-dom";
//import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

describe("Header Component", () => {
  it("contains a navbar", () => {
    //screen.debug();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("has nav links to home and shopping", () => {
    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("has a 'home' link", () => {
    expect(screen.getAllByRole("link")[0].textContent).toMatch(/home/i);
  });

  it("has a 'shop' link", () => {
    expect(screen.getAllByRole("link")[1].textContent).toMatch(/shopping/i);
  });

  it("hasn't changed unexpectedly", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

/* describe("Navigation Links", () => {
  const user = userEvent.setup();

  it("takes a user to the home page when 'home' is clicked", async () => {

    const homeLink = screen.getByRole("link", { name: "Shopping" });
    await user.click(homeLink);

    screen.debug();
  });
}); */
