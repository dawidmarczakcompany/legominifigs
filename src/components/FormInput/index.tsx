import styles from "./index.module.scss";

interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  errorMessage?: string;
  testId?: string;
}

const FormInput = ({
  label,
  errorMessage,
  required = true,
  type = "text",
  testId,
  ...props
}: FormInputProps) => {
  return (
    <div className={styles.formInputWrapper}>
      <label className={styles.inputLabel}>
        {label} {required && <span className={styles.requiredMark}>*</span>}{" "}
      </label>

      <input
        data-testid={testId}
        className={styles.input}
        type={type}
        {...props}
      />

      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
