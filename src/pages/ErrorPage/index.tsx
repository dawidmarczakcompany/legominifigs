import Button from "components/Button";
import styles from "./index.module.scss";

const ErrorPage = () => {
  //In more complex scenarios, here would be clearing app state
  const onReloadClick = () => window.location.replace("/");

  return (
    <div className={styles.errorPageWrapper}>
      <span className={styles.errorPageTitle}>Something went wrong</span>
      <span className={styles.errorPageSubtitle}>
        Please try to reload the app
      </span>

      <Button variant="primary" onClick={onReloadClick}>
        Go home
      </Button>
    </div>
  );
};

export default ErrorPage;
