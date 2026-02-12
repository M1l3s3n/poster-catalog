import styles from "./CatalogControls.module.css";
import type { PosterCategory } from "../../data/posters";

type Props = {
  query: string;
  onQueryChange: (value: string) => void;

  category?: PosterCategory;
  onCategoryChange: (value?: PosterCategory) => void;

  onClear: () => void;
};

export function CatalogControls({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  onClear,
}: Props) {
  return (
    <div className={styles.bar}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className={styles.input}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Type poster name..."
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className={styles.select}
          value={category ?? ""}
          onChange={(e) =>
            onCategoryChange(
              e.target.value ? (e.target.value as PosterCategory) : undefined,
            )
          }
        >
          <option value="">All</option>
          <option value="fantasy">Fantasy</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="nature">Nature</option>
        </select>
      </div>

      <button type="button" className={styles.clear} onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
