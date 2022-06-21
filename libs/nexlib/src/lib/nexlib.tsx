import styles from './nexlib.module.css';

/* eslint-disable-next-line */
export interface NexlibProps {}

export function Nexlib(props: NexlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Nexlib!</h1>
    </div>
  );
}

export default Nexlib;
