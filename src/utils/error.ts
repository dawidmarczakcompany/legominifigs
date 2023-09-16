import { ErrorReasonCodes } from "types/errors";

export const getErrorMessage = (reasonCode?: ErrorReasonCodes) => {
  switch (reasonCode) {
    case "MINIFIGS_FETCHING":
      return "No available minifigs";
    default:
      return "Something went wrong";
  }
};
