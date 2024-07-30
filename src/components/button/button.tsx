import styles from './styles.module.scss'

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
        {title}
    </button>
  );
};
