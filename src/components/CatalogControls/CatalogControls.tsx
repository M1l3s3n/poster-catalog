import styles from "./CatalogControls.module.css";
import type { PosterCategory } from "../../data/posters";
import posthog from "posthog-js";

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
  const handleQueryChange = (value: string) => {
    onQueryChange(value);

    if (value.trim().length >= 2) {
      posthog.capture("search_used", {
        query: value,
        query_length: value.trim().length,
      });
    }
  };

  const handleCategoryChange = (value?: PosterCategory) => {
    onCategoryChange(value);

    posthog.capture("filter_used", {
      filter_type: "category",
      filter_value: value ?? "all",
    });
  };

  const handleClear = () => {
    onClear();

    posthog.capture("catalog_cleared", {
      cleared_query: Boolean(query),
      cleared_category: Boolean(category),
    });
  };

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
          onChange={(e) => handleQueryChange(e.target.value)}
          data-testid="search-input"
          placeholder="Type poster name..."
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <select
          data-testid="category-select"
          id="category"
          className={styles.select}
          value={category ?? ""}
          onChange={(e) =>
            handleCategoryChange(
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

      <button type="button" className={styles.clear} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
