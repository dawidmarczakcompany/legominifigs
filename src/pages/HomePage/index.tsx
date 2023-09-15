import Button from "components/Button";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTE } from "utils/navigation";
import legoImg from "assets/images/mystery-box.png";

const HomePage = () => {
  const navigate = useNavigate();
  const onStartButtonClick = () => navigate(PAGE_ROUTE.MINIFIG_SELECTION);

  return (
    <div className={styles.homeWrapper}>
      <img src={legoImg} alt="" className={styles.homeImg} />

      <h1 className={styles.homeTitle}>Lego Minifigs Mystery Box</h1>

      <Button
        className={styles.homeButton}
        onClick={onStartButtonClick}
        variant="primary"
      >
        Let's go!
      </Button>
    </div>
  );
};

export default HomePage;
