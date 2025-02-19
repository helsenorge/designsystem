import styles from './styles.module.scss';

export const FormGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['formgrid']}>{children}</div>;
};
