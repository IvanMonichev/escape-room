import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.preloader}></div>
    </div>
  );
}

export default Spinner;
