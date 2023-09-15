import styles from "./index.module.scss";

interface FormGroupProps {
  children: React.ReactNode;
}
const FormGroup = ({ children }: FormGroupProps) => (
  <div className={styles.formGroupWrapper}>{children}</div>
);

export default FormGroup;
