import { test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const step = process.env.STEP || 'step-2';
const viewports = [
  { name: '360', width: 360, height: 740 },
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

test.describe('Responsive Screenshots for Content Layer and Components', () => {
  for (const vp of viewports) {
    test(`Capture /dev/content at ${vp.name}px`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/dev/content');
      await page.waitForLoadState('networkidle');

      const outDir = join(process.cwd(), 'references', 'screenshots', step);
      mkdirSync(outDir, { recursive: true });

      const filePath = join(outDir, `content-${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
    });

    test(`Capture /dev/components at ${vp.name}px`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/dev/components');
      await page.waitForLoadState('networkidle');

      // Trigger intersection reveals across full page height
      await page.evaluate(async () => {
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((r) => setTimeout(r, 200));
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 200));
      });

      const outDir = join(process.cwd(), 'references', 'screenshots', step);
      mkdirSync(outDir, { recursive: true });

      const filePath = join(outDir, `components-${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
    });
  }
});
