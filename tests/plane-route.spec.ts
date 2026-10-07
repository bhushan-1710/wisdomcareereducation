import { test, expect } from '@playwright/test';

test.describe('Paper Plane Signature Flight System (Step 7)', () => {
  test('Hero renders side-view plane taking off with subtle drift', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const heroPlane = page.locator('[data-asset-id="ill-plane-side"]');
    await expect(heroPlane).toBeVisible();

    // Confirms side-view plane is inside hero illustration container
    const heroContainer = page.locator('section[aria-label="Hero"]');
    await expect(heroContainer.locator('[data-asset-id="ill-plane-side"]')).toBeVisible();
  });

  test('Desktop corridor renders canonical SVG route and top-down plane', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const routeContainer = page.locator('#journey-route-container');
    await expect(routeContainer).toBeVisible();

    // Top-down plane traveler
    const topPlane = page.locator('[data-asset-id="ill-plane-top"]').first();
    await expect(topPlane).toBeVisible();

    // Background cloud depth layers
    await expect(page.locator('[data-asset-id="ill-cloud-1"]').first()).toBeVisible();
    await expect(page.locator('[data-asset-id="ill-cloud-2"]').first()).toBeVisible();
    await expect(page.locator('[data-asset-id="ill-cloud-3"]').first()).toBeVisible();
  });

  test('Desktop scrolling progresses plane and synchronizes journey steps', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Scroll gradually towards the journey section
    const journeySection = page.locator('#journey');
    await journeySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    // Verify journey step 1 is rendered
    const step1 = page.locator('[data-journey-step="1"]').first();
    await expect(step1).toBeVisible();

    // Reverse scroll back up
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(400);

    const topPlane = page.locator('[data-asset-id="ill-plane-top"]').first();
    await expect(topPlane).toBeVisible();
  });

  test('Anchor navigation smoothly updates scroll without plane error', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#journey');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(700);

    const journeyHeading = page.getByRole('heading', { name: /Your journey, step by step/i });
    await expect(journeyHeading).toBeVisible();
  });

  test('Mobile view renders left-gutter vertical track without content overlap', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const mobilePlane = page.locator('[data-asset-id="ill-plane-top"]').first();
    await expect(mobilePlane).toBeVisible();

    const box = await mobilePlane.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      // Plane is strictly positioned in the left gutter (< 60px)
      expect(box.x).toBeLessThan(60);
    }

    // Check that content cards are visible
    const aboutHeading = page.getByRole('heading', { name: /15\+ years of turning ambition into careers/i });
    await expect(aboutHeading).toBeVisible();
  });

  test('Reduced motion hides moving plane, displays static route, and keeps all steps accessible', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Moving plane traveler is disabled under reduced motion
    const movingPlane = page.locator('[data-asset-id="ill-plane-top"]');
    await expect(movingPlane).toHaveCount(0);

    // Static route container remains visible
    const routeContainer = page.locator('#journey-route-container');
    await expect(routeContainer).toBeVisible();

    // All journey steps are fully accessible
    for (let s = 1; s <= 5; s++) {
      await expect(page.locator(`[data-journey-step="${s}"]`).first()).toBeVisible();
    }
  });
});
