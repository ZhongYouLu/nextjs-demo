import cn from 'classnames';
import styles from './_.module.scss';

type Props = {
  /** 類別 */
  type: 'success' | 'error';
};

const Alert: React.FC<Props> = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
