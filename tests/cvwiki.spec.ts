import { test, expect } from "@playwright/test"

test("Landing Page - Screenshot", async ({ page }) => {
  await page.goto("")
  await expect(page.locator("body")).toHaveScreenshot()
})
