import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Audits', () => {
  test('Home page passes axe checks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1600);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Dev components gallery passes axe checks', async ({ page }) => {
    await page.goto('/dev/components');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(600);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .disableRules(['region']) // Gallery demo blocks don't all need landmark regions
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Dev content verification page passes axe checks', async ({ page }) => {
    await page.goto('/dev/content');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(600);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .disableRules(['region'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  const innerRoutes = [
    '/about',
    '/programs',
    '/programs/study-abroad',
    '/sectors',
    '/destinations',
    '/destinations/malaysia',
    '/success-stories',
    '/csr',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/404',
  ];

  for (const route of innerRoutes) {
    test(`Route ${route} passes axe checks`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1200);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test('Home page with prefers-reduced-motion renders all content visibly without opacity traps', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const heroHeading = page.locator('h1');
    await expect(heroHeading).toBeVisible();

    const statCount = page.getByText('15+', { exact: true });
    await expect(statCount).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
