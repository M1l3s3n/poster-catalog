import { test, expect } from "@playwright/test";

test.describe("Poster Catalog critical path", () => {
  test("search filters posters by title", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await page.getByTestId("search-input").fill("Dark");

    await expect(page.getByTestId("poster-card")).toHaveCount(1);

    const darkCard = page.getByTestId("poster-card").filter({
      has: page.getByText("Dark Castle"),
    });

    await expect(darkCard).toBeVisible();

    await expect(darkCard).toHaveCount(1);
  });

  test("category filter works", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await page.getByTestId("category-select").selectOption("nature");

    await expect(page.getByTestId("poster-card")).toHaveCount(1);

    const oldWoodsCard = page.getByTestId("poster-card").filter({
      has: page.getByText("Old Woods"),
    });

    await expect(oldWoodsCard).toBeVisible();
  });
});
