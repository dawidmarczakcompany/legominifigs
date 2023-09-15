import styles from "./index.module.scss";
import cn from "classnames";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.disabled]: disabled,
        [styles.secondary]: variant === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;