import { MutableRefObject, ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButton {
  onClick: (e: any) => void;
  children: ReactNode;
  ref?: MutableRefObject<null>;
}

const Button = ({ onClick, children, ref }: IButton) => {
  return (
    <button ref={ref} className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
