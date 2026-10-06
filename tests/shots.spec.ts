import { test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const step = process.env.STEP || 'step-3';
const viewports = [
  { name: '360', width: 360, height: 740 },
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

test.describe('Responsive Screenshots for Step 3 — Home A', () => {
  for (const vp of viewports) {
    test(`Capture Home (/) at ${vp.name}px`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Scroll gradually down the page to trigger all IntersectionObservers
      await page.evaluate(async () => {
        const totalHeight = document.body.scrollHeight;
        for (let y = 0; y <= totalHeight; y += 300) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 50));
        }
        window.scrollTo(0, 0);
      });

      // Wait for all reveal transitions to settle completely at opacity: 1
      await page.waitForTimeout(900);

      const outDir = join(process.cwd(), 'references', 'screenshots', step);
      mkdirSync(outDir, { recursive: true });

      const filePath = join(outDir, `home-${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
    });

    test(`Capture /dev/content at ${vp.name}px`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/dev/content');
      await page.waitForLoadState('networkidle');

      const outDir = join(process.cwd(), 'references', 'screenshots', step);
      mkdirSync(outDir, { recursive: true });

      const filePath = join(outDir, `content-${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
    });
  }
});
