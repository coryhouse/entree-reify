import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should throw an error if id is empty", () => {
    expect(() =>
      render(
        <Input type="text" label="label" value="" id="" onChange={() => {}} />
      )
    ).toThrow("ID must be populated");
  });

  it('should render an input type="text" and an attached label when input type="text"', () => {
    render(
      <Input type="text" label="label" value="" id="id" onChange={() => {}} />
    );
    screen.getByLabelText("label"); // Assertion is implied / built-in
  });

  it('should render an textarea with an attached label when type="textarea"', () => {
    render(
      <Input
        type="textarea"
        label="label"
        value=""
        id="id"
        onChange={() => {}}
      />
    );
    screen.getByLabelText("label"); // Assertion is implied / built-in
  });
});
