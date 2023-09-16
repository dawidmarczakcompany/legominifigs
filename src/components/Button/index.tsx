import Loader from "components/Loader";
import styles from "./index.module.scss";
import cn from "classnames";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  testId?: string;
  loading?: boolean;
}

const Button = ({
  children,
  onClick,
  variant,
  className,
  disabled,
  testId,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.disabled]: disabled,
        [styles.secondary]: variant === "secondary",
      })}
      onClick={onClick}
      data-testid={testId}
      disabled={disabled}
      {...props}
    >
      <div className={styles.buttonChildren}>
        {children}
        {loading && <Loader variant="button" />}
      </div>
    </button>
  );
};

export default Button;
