import { test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const step = process.env.STEP || 'step-5';

const keyRoutes = [
  { slug: 'about', path: '/about' },
  { slug: 'programs', path: '/programs' },
  { slug: 'program-study-abroad', path: '/programs/study-abroad' },
  { slug: 'sectors', path: '/sectors' },
  { slug: 'destinations', path: '/destinations' },
  { slug: 'destination-malaysia', path: '/destinations/malaysia' },
  { slug: 'success-stories', path: '/success-stories' },
  { slug: 'csr', path: '/csr' },
  { slug: 'faq', path: '/faq' },
  { slug: 'contact', path: '/contact' },
  { slug: 'privacy-policy', path: '/privacy-policy' },
  { slug: 'terms', path: '/terms' },
  { slug: '404', path: '/404' },
];

const viewports = [
  { name: '360', width: 360, height: 740 },
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

test.describe('Responsive Screenshots for Step 5 — Inner Pages', () => {
  for (const route of keyRoutes) {
    for (const vp of viewports) {
      // Prioritize 360, 390, 768, 1440 for all routes; 1024 for key visual hubs
      if (vp.name === '1024' && !['about', 'programs', 'program-study-abroad', 'sectors', 'contact'].includes(route.slug)) {
        continue;
      }

      test(`Capture ${route.path} at ${vp.name}px`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route.path);
        await page.waitForLoadState('networkidle');

        // Scroll gradually down the page to trigger all IntersectionObservers
        await page.evaluate(async () => {
          const totalHeight = document.body.scrollHeight;
          for (let y = 0; y <= totalHeight; y += 400) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 40));
          }
          window.scrollTo(0, 0);
        });

        // Wait for all reveal transitions to settle completely
        await page.waitForTimeout(500);

        const outDir = join(process.cwd(), 'references', 'screenshots', step);
        mkdirSync(outDir, { recursive: true });

        const filePath = join(outDir, `${route.slug}-${vp.name}.png`);
        await page.screenshot({ path: filePath, fullPage: true });
      });
    }
  }
});
