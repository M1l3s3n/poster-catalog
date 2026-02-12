export function getDiscountedPrice(price: number, discountPercentage?: number) {
  if (!discountPercentage || discountPercentage <= 0) return price;
  const discounted = price * (1 - discountPercentage / 100);
  return Math.round(discounted * 100) / 100;
}
