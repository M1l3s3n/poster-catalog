import styles from "./PosterCard.module.css";
import type { Poster } from "../../data/posters";

type Props = {
  poster: Poster;
};

export function PosterCard({ poster }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <h3>{poster.title}</h3>
      <p>${poster.price}</p>
    </div>
  );
}
