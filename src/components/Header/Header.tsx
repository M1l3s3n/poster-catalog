import styles from "./Header.module.css";

type Props = {
  onBreakWorld?: () => void;
};

export function Header({ onBreakWorld }: Props) {
  const appStatus = import.meta.env.VITE_APP_STATUS;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Poster Catalog</div>

      <div className={styles.right}>
        <div className={styles.status}>{appStatus}</div>

        <button
          type="button"
          className={styles.breakButton}
          onClick={onBreakWorld}
          title="Break the world"
          aria-label="Break the world"
        >
          !
        </button>
      </div>
    </header>
  );
}
