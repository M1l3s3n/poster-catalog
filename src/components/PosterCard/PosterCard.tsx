import styles from "./PosterCard.module.css";
import type { Poster } from "../../data/posters";
import { getDiscountedPrice } from "../../utils/pricing";
import posthog from "posthog-js";
import { useEffect, useState } from "react";

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
  const [showFeaturedBadge, setShowFeaturedBadge] = useState(false);

  useEffect(() => {
    posthog.onFeatureFlags(() => {
      setShowFeaturedBadge(!!posthog.isFeatureEnabled("show-featured-badge"));
    });
  }, []);

  const handleClick = () => {
    posthog.capture("poster_clicked", {
      poster_id: poster.id,
      poster_title: poster.title,
      category: poster.category,
      price: poster.price,
      final_price: finalPrice,
      has_discount: hasDiscount,
      is_featured: poster.isFeatured,
      stock: poster.stock,
      rating: poster.rating,
    });

    onSelect?.();
  };

  return (
    <button
      data-testid="poster-card"
      type="button"
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <div className={styles.media}>
        <img
          src={poster.thumbnail}
          alt={poster.title}
          className={styles.thumb}
        />
        <div className={styles.badges}>
          {poster.isFeatured && showFeaturedBadge ? (
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
