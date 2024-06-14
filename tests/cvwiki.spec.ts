import { test, expect } from "@playwright/test"

test("Landing Page - Screenshot", async ({ page }) => {
  await page.goto("")
  await expect(page.locator("body")).toHaveScreenshot()

  // Expect a title "to contain" a substring.
  //  await expect(page).toHaveTitle(/Curriculum Vitae - Vincent Dirks - Vincents CV Wiki/);
})
