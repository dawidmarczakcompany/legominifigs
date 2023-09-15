import styles from "./index.module.scss";
import cn from "classnames";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn(styles.loader, className)}>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loader;
