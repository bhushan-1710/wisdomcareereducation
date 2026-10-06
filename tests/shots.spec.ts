import { test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const step = process.env.STEP || 'step-0';
const viewports = [
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1440', width: 1440, height: 900 },
];

test.describe('Responsive Screenshots', () => {
  for (const vp of viewports) {
    test(`Capture screenshot at ${vp.name}px`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const outDir = join(process.cwd(), 'references', 'screenshots', step);
      mkdirSync(outDir, { recursive: true });

      const filePath = join(outDir, `home-${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
    });
  }
});
