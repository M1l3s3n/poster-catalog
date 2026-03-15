import styles from "./Header.module.css";

export function Header() {
  const appStatus = import.meta.env.VITE_APP_STATUS;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Poster Catalog</div>
      <div className={styles.status}>{appStatus}</div>
    </header>
  );
}
