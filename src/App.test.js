import React from "react";
import Counter from "counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter component", () => {
  it("renders initial state correctly", () => {
    render(<Counter />);
    expect(screen.queryByText(/0/i)).toBeInTheDocument();
  });
  it("increments the counter value", () => {
    render(<Counter />);
    fireEvent.click(screen.queryByText(/Increment/i));
    expect(screen.queryByText(/1/i)).toBeInTheDocument();
  });
  it("decrements the counter value", () => {
    render(<Counter />);
    fireEvent.click(screen.queryByText(/Decrement/i));
    expect(screen.queryByText(/-1/i)).toBeInTheDocument();
  });
  it("resets the counter value", () => {
    render(<Counter />);
    fireEvent.click(screen.queryByText(/Increment/i));
    fireEvent.click(screen.queryByText(/Reset/i));
    expect(screen.queryByText(/0/i)).toBeInTheDocument();
  });
});
