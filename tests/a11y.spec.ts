import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Audits', () => {
  test('Home page passes axe checks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Dev components gallery passes axe checks', async ({ page }) => {
    await page.goto('/dev/components');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .disableRules(['region']) // Gallery demo blocks don't all need landmark regions
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Dev content verification page passes axe checks', async ({ page }) => {
    await page.goto('/dev/content');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .disableRules(['region'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
