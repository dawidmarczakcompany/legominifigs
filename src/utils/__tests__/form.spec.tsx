import {
  PurchaseFormValidationMessages,
  validateDateOfBirth,
  validateEmail,
  validatePhone,
} from "utils/validators";

describe("Form", () => {
  describe("Email validator", () => {
    test("Should return an error message for an invalid email", () => {
      const invalidEmails = ["invalid-email", "invalid@.com", "@example.com"];

      invalidEmails.forEach((email) => {
        const errorMessage = validateEmail(email);
        expect(errorMessage).toBe(PurchaseFormValidationMessages.WRONG_EMAIL);
      });
    });

    test("Should not return error for a valid email", () => {
      const validEmails = [
        "valid@example.com",
        "another.valid.email@gmail.com",
      ];

      validEmails.forEach((email) => {
        const errorMessage = validateEmail(email);
        expect(errorMessage).toBeUndefined();
      });
    });
  });

  describe("Phone validator", () => {
    test("Should return an error message for an invalid phone number", () => {
      const invalidPhoneNumbers = ["111", "+111", "1-1-1", "2224445559"];

      invalidPhoneNumbers.forEach((phoneNumber) => {
        const errorMessage = validatePhone(phoneNumber);
        expect(errorMessage).toBe(PurchaseFormValidationMessages.WRONG_PHONE);
      });
    });

    test("Should not return undefined for a valid phone number", () => {
      const validPhoneNumbers = ["123456789"];

      validPhoneNumbers.forEach((phoneNumber) => {
        const errorMessage = validatePhone(phoneNumber);
        expect(errorMessage).toBeUndefined();
      });
    });
  });

  describe("Date of birth validator", () => {
    test("Should return an error message for a future date", () => {
      const futureDates = ["2024-01-01", "2050-12-31"];

      futureDates.forEach((date) => {
        const errorMessage = validateDateOfBirth(date);
        expect(errorMessage).toBe(PurchaseFormValidationMessages.WRONG_DATE);
      });
    });

    test("Should not return undefined for a past date", () => {
      const pastDates = ["1990-01-01", "2000-12-31"];

      pastDates.forEach((date) => {
        const errorMessage = validateDateOfBirth(date);
        expect(errorMessage).toBeUndefined();
      });
    });
  });
});
