import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInContainer from "../components/signInComponents/SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      const username = getByTestId("username");
      const password = getByTestId("password");
      
      fireEvent.changeText(username, "kalle");
      fireEvent.changeText(password, "password");
      fireEvent.press(getByTestId("signIn"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
