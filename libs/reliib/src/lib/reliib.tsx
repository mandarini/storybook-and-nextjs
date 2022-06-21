import styles from './reliib.module.css';

/* eslint-disable-next-line */
export interface ReliibProps {}

export function Reliib(props: ReliibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reliib!</h1>
    </div>
  );
}

export default Reliib;
