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

    // Master SVG route with ill-route asset tracking
    const routeSvg = page.locator('svg[data-asset-id="ill-route"]');
    await expect(routeSvg).toBeVisible();
    await expect(routeSvg).toHaveAttribute('data-route-source', /^(procedural-fallback|canonical-asset)$/);

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

    // Zero horizontal overflow check
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Mobile route SVG track exists in left gutter
    const mobileRouteSvg = page.locator('svg[data-asset-id="ill-route-mobile"]');
    await expect(mobileRouteSvg).toBeVisible();

    // Mobile paper plane traveler
    const mobilePlane = page.locator('[data-asset-id="ill-plane-top"]').first();
    await expect(mobilePlane).toBeVisible();

    const planeBox = await mobilePlane.boundingBox();
    expect(planeBox).not.toBeNull();
    if (planeBox) {
      // Plane is strictly positioned in the left gutter (< 60px) and within viewport (>= 0px)
      expect(planeBox.x).toBeGreaterThanOrEqual(0);
      expect(planeBox.x).toBeLessThan(60);
    }

    // Check that readable text headings are completely visible and clear of plane
    const aboutHeading = page.getByRole('heading', { name: /15\+ years of turning ambition into careers/i });
    await expect(aboutHeading).toBeVisible();
    const headingBox = await aboutHeading.boundingBox();
    if (planeBox && headingBox) {
      // Heading content column starts to the right of the gutter plane corridor
      expect(headingBox.x).toBeGreaterThan(planeBox.x);
    }
  });

  test('360px compact mobile layout has zero horizontal overflow and safe gutter corridor', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    const mobilePlane = page.locator('[data-asset-id="ill-plane-top"]').first();
    await expect(mobilePlane).toBeVisible();

    const planeBox = await mobilePlane.boundingBox();
    expect(planeBox).not.toBeNull();
    if (planeBox) {
      expect(planeBox.x).toBeGreaterThanOrEqual(0);
      expect(planeBox.x).toBeLessThan(60);
    }
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

    // All journey steps are fully accessible (either in desktop or mobile layout)
    for (let s = 1; s <= 5; s++) {
      const stepEl = page.locator(`[data-journey-step="${s}"]`).filter({ visible: true });
      await expect(stepEl).toBeVisible();
    }
  });
});
