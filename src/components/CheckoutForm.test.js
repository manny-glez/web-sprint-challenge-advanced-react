import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)

  const heading = screen.getByText(/Checkout Form/i)

  expect(heading).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)

  const nameInput = screen.getByLabelText(/First Name:/i)
  const lastNameInput = screen.getByLabelText(/Last Name:/i)
  const cityInput = screen.getByLabelText(/City:/i)
  const stateInput = screen.getByLabelText(/State:/i)
  const zipInput = screen.getByLabelText(/Zip:/i)

  const SubmitBtn = screen.getByRole(/button/i)

  userEvent.type(nameInput, "Anthony")
  userEvent.type(lastNameInput, "Iommi")
  userEvent.type(cityInput, "Birmingham")
  userEvent.type(stateInput, "West Midlands")
  userEvent.type(zipInput, "21370")

  userEvent.click(SubmitBtn)

  const successMsg = screen.getByText(/You have ordered some plants!/i)
  const location = screen.getByText(/Birmingham, West Midlands 21370/i)
  const fullName = screen.getByText(/Anthony Iommi/i)

  expect(successMsg).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(fullName).toBeInTheDocument();
});
