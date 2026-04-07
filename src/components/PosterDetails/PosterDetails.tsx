import styles from "./PosterDetails.module.css";
import type { Poster } from "../../data/posters";
import { getDiscountedPrice } from "../../utils/pricing";

type Props = { poster: Poster };

export function PosterDetails({ poster }: Props) {
  const finalPrice = getDiscountedPrice(
    poster.price,
    poster.discountPercentage,
  );
  const hasDiscount = finalPrice !== poster.price;

  return (
    <div className={styles.panel}>
      <div className={styles.previewWrapper}>
        <img
          src={poster.images[0]}
          alt={poster.title}
          className={styles.preview}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <h2 className={styles.title}>{poster.title}</h2>
          {poster.isFeatured ? (
            <span className={styles.featured}>Featured</span>
          ) : null}
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>${finalPrice.toFixed(2)}</span>
          {hasDiscount ? (
            <>
              <span className={styles.oldPrice}>
                ${poster.price.toFixed(2)}
              </span>
              <span className={styles.discount}>
                -{poster.discountPercentage}%
              </span>
            </>
          ) : null}
        </div>

        <div className={styles.stats}>
          <span>★ {poster.rating.toFixed(1)}</span>
          <span>{poster.reviewsCount} reviews</span>
          <span>
            {poster.stock > 0 ? `${poster.stock} in stock` : "Out of stock"}
          </span>
        </div>

        <p className={styles.desc}>{poster.fullDescription}</p>

        <div className={styles.section}>
          <div className={styles.label}>Material</div>
          <div className={styles.value}>{poster.material}</div>
        </div>

        <div className={styles.section}>
          <div className={styles.label}>Available sizes</div>
          <div className={styles.chips}>
            {poster.availableSizes.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.label}>Tags</div>
          <div className={styles.chips}>
            {poster.tags.map((t) => (
              <span key={t} className={styles.chipMuted}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
