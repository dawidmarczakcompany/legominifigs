import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import successImg from "assets/images/success.png";
import Button from "components/Button";

const SuccessPage = () => {
  const navigate = useNavigate();
  const onGoHomeClick = () => navigate("/");

  return (
    <div className={styles.successPageWrapper}>
      <img src={successImg} alt="success" className={styles.successPageImg} />
      <h1 className={styles.successPageTitle}>Congratulations!</h1>
      <span>
        Your Harry Potter minifig will be now shipped to the provided address.
      </span>

      <Button variant="primary" onClick={onGoHomeClick}>
        Go home
      </Button>
    </div>
  );
};

export default SuccessPage;
