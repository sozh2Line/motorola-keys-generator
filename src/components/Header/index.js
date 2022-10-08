import styles from "./styles.module.scss";

export default function Header({ onRefreshKeys, onExportKeys }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={onRefreshKeys}>
        Refresh keys
      </button>
      <button className={styles.button} onClick={onExportKeys}>
        Export symmetric keys
      </button>
    </div>
  );
}
