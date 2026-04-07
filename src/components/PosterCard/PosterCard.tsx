import styles from "./PosterCard.module.css";
import type { Poster } from "../../data/posters";
import { getDiscountedPrice } from "../../utils/pricing";

type Props = {
  poster: Poster;
  selected?: boolean;
  onSelect?: () => void;
};

export function PosterCard({ poster, selected = false, onSelect }: Props) {
  const finalPrice = getDiscountedPrice(
    poster.price,
    poster.discountPercentage,
  );
  const hasDiscount = finalPrice !== poster.price;

  return (
    <button
      data-testid="poster-card"
      type="button"
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.media}>
        <img
          src={poster.thumbnail}
          alt={poster.title}
          className={styles.thumb}
        />
        <div className={styles.badges}>
          {poster.isFeatured ? (
            <span className={styles.badge}>Featured</span>
          ) : null}
          {hasDiscount ? (
            <span className={`${styles.badge} ${styles.discount}`}>
              -{poster.discountPercentage}%
            </span>
          ) : null}
          {poster.stock <= 0 ? (
            <span className={`${styles.badge} ${styles.out}`}>Out</span>
          ) : null}
        </div>
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>{poster.title}</h3>

        <div className={styles.row}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>${finalPrice.toFixed(2)}</span>
            {hasDiscount ? (
              <span className={styles.oldPrice}>
                ${poster.price.toFixed(2)}
              </span>
            ) : null}
          </div>

          <span className={styles.rating}>
            ★ {poster.rating.toFixed(1)} ({poster.reviewsCount})
          </span>
        </div>

        <p className={styles.small}>{poster.shortDescription}</p>
      </div>
    </button>
  );
}
