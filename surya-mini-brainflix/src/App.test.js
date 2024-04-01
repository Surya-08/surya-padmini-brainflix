import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId("brain-flix-page");
    expect(linkElement).toBeInTheDocument();
  });
});
