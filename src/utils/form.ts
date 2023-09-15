export enum PurchaseFormValidationMessages {
  REQUIRED = "This field is required",
  WRONG_EMAIL = "Please enter correct e-mail address",
  WRONG_PHONE = "Please enter correct phone number (+48XXXXXXXXX)",
  WRONG_DATE = "Please enter correct date of birth in the past",
}

export const validateEmail = (email: string) => {
  // Basic validation for format {randomString1}@{randomString2}.{randomString3}

  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

  if (!emailRegex.test(email)) {
    return PurchaseFormValidationMessages.WRONG_EMAIL;
  }
};

export const validatePhone = (phoneNumber: string) => {
  //Basic validation for Polish numbers +{48}{number}

  const phoneRegex = /^\+48\d{9}$/;

  if (!phoneRegex.test(phoneNumber)) {
    return PurchaseFormValidationMessages.WRONG_PHONE;
  }
};

export const validateDateOfBirth = (date: string) => {
  //Basic validation for date in the past besides blocking it in picker
  const currentDate = new Date().getTime();
  const selectedDate = Date.parse(date);

  if (selectedDate >= currentDate) {
    return PurchaseFormValidationMessages.WRONG_DATE;
  }
};
