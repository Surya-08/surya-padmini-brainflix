import { render, screen } from "@testing-library/react";
import Component from "./Component";

describe("Main component", () => {
  test("renders initial page", () => {
    render(<Component />);
    const linkElement = screen.getByText(/JOIN THE CONVERSATION/i);
    expect(linkElement).toBeInTheDocument();
  });
});
