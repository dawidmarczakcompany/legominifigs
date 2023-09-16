import { PAST_DATE_MIN_VALUE } from "./constants";

export enum PurchaseFormValidationMessages {
  REQUIRED = "This field is required",
  WRONG_EMAIL = "Please enter correct e-mail address",
  WRONG_PHONE = "Please enter correct 9-digits phone number",
  WRONG_DATE = "Please enter correct date of birth",
}

export const validateEmail = (email: string) => {
  // Basic validation for format {randomString1}@{randomString2}.{randomString3}

  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

  if (!emailRegex.test(email)) {
    return PurchaseFormValidationMessages.WRONG_EMAIL;
  }
};

export const validatePhone = (phoneNumber: string) => {
  //Basic validation for phone number - min 9 digits
  const phoneRegex = /^\d{9}$/;

  if (!phoneRegex.test(phoneNumber)) {
    return PurchaseFormValidationMessages.WRONG_PHONE;
  }
};

export const validateDateOfBirth = (date: string) => {
  //Basic validation for date in the past besides blocking it in picker
  const currentDate = new Date().getTime();
  const selectedDate = Date.parse(date);
  const pastDate = Date.parse(PAST_DATE_MIN_VALUE);

  if (selectedDate >= currentDate || selectedDate <= pastDate) {
    return PurchaseFormValidationMessages.WRONG_DATE;
  }
};
