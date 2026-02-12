import { useMemo, useState } from "react";
import styles from "./HomePage.module.css";
import { posters } from "../../data/posters";
import { Header } from "../../components/Header/Header";
import { PosterCard } from "../../components/PosterCard/PosterCard";
import { PosterDetails } from "../../components/PosterDetails/PosterDetails";

export function HomePage() {
  const [selectedId, setSelectedId] = useState<number>(posters[0]?.id ?? 0);

  const selected = useMemo(
    () => posters.find((p) => p.id === selectedId),
    [selectedId],
  );

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.layout}>
          <section className={styles.details}>
            {selected ? <PosterDetails poster={selected} /> : null}
          </section>

          <section className={styles.list}>
            <div className={styles.grid}>
              {posters.map((p) => (
                <PosterCard
                  key={p.id}
                  poster={p}
                  selected={p.id === selectedId}
                  onSelect={() => setSelectedId(p.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
