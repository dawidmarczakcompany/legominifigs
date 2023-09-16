import styles from "./index.module.scss";
import cn from "classnames";

interface LoaderProps {
  className?: string;
  testId?: string;
  variant?: "large" | "button";
}

const Loader = ({ className, testId, variant }: LoaderProps) => {
  return (
    <div className={cn(styles.loader, className)} data-testid={testId}>
      <div
        className={cn(styles.circle, {
          [styles.circleButton]: variant === "button",
        })}
      ></div>
    </div>
  );
};

export default Loader;
