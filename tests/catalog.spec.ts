import { test, expect } from "@playwright/test";

test.describe("Poster Catalog critical path", () => {
  test("search filters posters by title", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const searchInput = page.getByTestId("search-input");
    await searchInput.fill("Dark");

    await expect(searchInput).toHaveValue("Dark");
    await expect(page.getByTestId("poster-card")).toHaveCount(1);

    const darkCard = page.getByTestId("poster-card").filter({
      has: page.getByText("Dark Castle"),
    });

    await expect(darkCard).toBeVisible();
    await expect(darkCard).toHaveCount(1);
  });

  test("category filter works", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const categorySelect = page.getByTestId("category-select");
    await categorySelect.selectOption("nature");

    await expect(categorySelect).toHaveValue("nature");
    await expect(page.getByTestId("poster-card")).toHaveCount(1);

    const oldWoodsCard = page.getByTestId("poster-card").filter({
      has: page.getByText("Old Woods"),
    });

    await expect(oldWoodsCard).toBeVisible();
  });

  test("search can be cleared", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const searchInput = page.getByTestId("search-input");

    await searchInput.fill("Dark");
    await expect(searchInput).toHaveValue("Dark");
    await expect(page.getByTestId("poster-card")).toHaveCount(1);

    await searchInput.clear();
    await expect(searchInput).toHaveValue("");
    await expect(page.getByTestId("poster-card")).toHaveCount(3);
  });
});
