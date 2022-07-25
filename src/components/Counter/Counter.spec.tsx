import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("My Counter Tests do the thing", () => {
  it("renders current count to 0", () => {
    render(<Counter description="My Counter" defaultCount={0} />);
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  });

  it("renders title as my counter", () => {
    render(<Counter description="My Counter" defaultCount={0} />);
    expect(screen.getByText(/My Counter/i)).toBeInTheDocument();
  });

  it("renders current count 1", () => {
    render(<Counter description="My Counter" defaultCount={0} />);
    fireEvent.click(screen.getByRole("button", { name: "Increment Counter" }));
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });

  it('renders "Current count:-1"', () => {
    render(<Counter description="My Counter" defaultCount={0} />);
    fireEvent.click(screen.getByRole("button", { name: "Decrement Counter" }));
    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
  });

  it('renders the "Current Count: 6"', async () => {
    render(<Counter description="My Counter" defaultCount={1} />);

    const input = screen.getByLabelText(/Incrementor/i);
    await user.clear(input);
    await user.type(input, "5");
    await user.click(screen.getByRole("button", { name: "Increment Counter" }));

    expect(screen.getByText("Current Count: 6")).toBeInTheDocument();
  });
});
