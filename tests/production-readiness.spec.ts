import { test, expect } from '@playwright/test';

test.describe('Production Readiness & Technical Gates', () => {
  test('404 Page returns 404 status and renders branded layout with home CTA', async ({ page }) => {
    const response = await page.goto('/non-existent-career-path-404');
    expect(response?.status()).toBe(404);

    // Branded 404 page elements
    const heading = page.getByRole('heading', { name: /route went off course|Page Not Found|404/i });
    await expect(heading).toBeVisible();

    const homeCta = page.getByRole('link', { name: /Return to Homepage|Back to runway/i });
    await expect(homeCta).toBeVisible();
  });

  test('301 redirects preserve traffic from legacy URL structure', async ({ request }) => {
    const legacyRedirects = [
      { from: '/about-us', to: '/about' },
      { from: '/contact-us', to: '/contact' },
      { from: '/services', to: '/programs' },
      { from: '/internships', to: '/programs/student-internships' },
      { from: '/study', to: '/programs/study-abroad' },
      { from: '/testimonials', to: '/success-stories' },
    ];

    for (const { from, to } of legacyRedirects) {
      const res = await request.get(from, { maxRedirects: 0 });
      expect([301, 307, 308]).toContain(res.status());
      const location = res.headers()['location'];
      expect(location).toContain(to);
    }
  });

  test('robots.txt returns valid directives and sitemap link', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('User-Agent: *');
    expect(text).toContain('Disallow: /dev/');
    expect(text).toContain('Sitemap:');
  });

  test('sitemap.xml returns valid XML sitemap with all indexable routes', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('<urlset');
    expect(text).toContain('/about');
    expect(text).toContain('/programs');
    expect(text).toContain('/programs/study-abroad');
    expect(text).toContain('/destinations/malaysia');
  });

  test('Security headers are present on responses', async ({ request }) => {
    const res = await request.get('/');
    const headers = res.headers();

    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-frame-options']).toBe('DENY');
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['content-security-policy']).toBeDefined();
  });

  test('Page heading hierarchy has exactly one H1 per page', async ({ page }) => {
    const pagesToCheck = ['/', '/about', '/programs', '/contact', '/privacy-policy'];

    for (const path of pagesToCheck) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    }
  });

  test('Structured JSON-LD schema is present and valid', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);

    const content = await jsonLd.first().textContent();
    expect(content).not.toBeNull();
    if (content) {
      const data = JSON.parse(content);
      expect(data['@context']).toBe('https://schema.org');
      expect(data['@type']).toBeDefined();
    }
  });
});
