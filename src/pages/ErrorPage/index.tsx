import Button from "components/Button";
import styles from "./index.module.scss";
import { ErrorReasonCodes } from "types/errors";
import { getErrorMessage } from "utils/error";

interface ErrorPageProps {
  reasonCode?: ErrorReasonCodes;
  testId?: string;
}

const ErrorPage = ({ reasonCode, testId }: ErrorPageProps) => {
  //In more complex scenarios, here may be clearing app state or calling some redux action
  const onReloadClick = () => window.location.replace("/");
  const errorMessage = getErrorMessage(reasonCode);

  return (
    <div className={styles.errorPageWrapper} data-testid={testId}>
      <span className={styles.errorPageTitle}>{errorMessage}</span>
      <span className={styles.errorPageSubtitle}>
        Please try to reload the app or check your Internet connection
      </span>

      <Button variant="primary" onClick={onReloadClick}>
        Go home
      </Button>
    </div>
  );
};

export default ErrorPage;
