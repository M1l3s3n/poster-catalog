import styles from "./HomePage.module.css";
import { posters } from "../../data/posters";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { PosterCard } from "../../components/PosterCard/PosterCard";

export function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {posters.map((poster) => (
            <PosterCard key={poster.id} poster={poster} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
