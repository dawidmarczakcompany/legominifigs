import styles from "./index.module.scss";

interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  errorMessage?: string;
}

const FormInput = ({
  label,
  errorMessage,
  required = true,
  type = "text",
  ...props
}: FormInputProps) => {
  return (
    <div className={styles.formInputWrapper}>
      <span className={styles.inputLabel}>
        {label} {required && <span className={styles.requiredMark}>*</span>}{" "}
      </span>
      <input className={styles.input} type={type} {...props} />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
