import { useMemo, useState } from "react";
import styles from "./HomePage.module.css";
import { posters } from "../../data/posters";
import type { PosterCategory } from "../../data/posters";

import { Header } from "../../components/Header/Header";
import { PosterCard } from "../../components/PosterCard/PosterCard";
import { PosterDetails } from "../../components/PosterDetails/PosterDetails";
import { CatalogControls } from "../../components/CatalogControls/CatalogControls";

import { searchPosters, filterByCategory } from "../../utils/catalog";

export function HomePage() {
  const [selectedId, setSelectedId] = useState<number>(posters[0]?.id ?? 0);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PosterCategory | undefined>(
    undefined,
  );

  const filtered = useMemo(() => {
    const searched = searchPosters(posters, query);
    return filterByCategory(searched, category);
  }, [query, category]);

  const selected = useMemo(() => {
    return filtered.find((p) => p.id === selectedId) ?? filtered[0];
  }, [filtered, selectedId]);

  const safeSelectedId = selected?.id ?? 0;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.layout}>
          <section className={styles.details}>
            {selected ? <PosterDetails poster={selected} /> : null}
          </section>

          <section className={styles.list}>
            <CatalogControls
              query={query}
              onQueryChange={setQuery}
              category={category}
              onCategoryChange={setCategory}
              onClear={() => {
                setQuery("");
                setCategory(undefined);
              }}
            />

            <div className={styles.listScroll}>
              <div className={styles.grid}>
                {filtered.map((p) => (
                  <PosterCard
                    key={p.id}
                    poster={p}
                    selected={p.id === safeSelectedId}
                    onSelect={() => setSelectedId(p.id)}
                  />
                ))}

                {filtered.length === 0 ? (
                  <div className={styles.empty}>No posters found.</div>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
