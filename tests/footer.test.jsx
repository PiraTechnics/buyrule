import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Footer from "/src/components/Footer";

beforeEach(() => {
  render(<Footer />);
});

describe("Footer Component", () => {
  it("contains copyright info", () => {
    expect(screen.getByText("© Devin Younge")).toBeInTheDocument();
  });

  it("hasn't changed unexpectedly", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
