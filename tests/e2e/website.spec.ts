import { test, expect } from '@playwright/test';

// ── Homepage ──────────────────────────────────────────────────────────────────

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/NexusCare/i);
  });

  test('nav shows all links', async ({ page }) => {
    await expect(page.getByRole('navigation').getByText('How It Works')).toBeVisible();
    await expect(page.getByRole('navigation').getByText('Features')).toBeVisible();
    await expect(page.getByRole('navigation').getByText("Who It's For")).toBeVisible();
    await expect(page.getByRole('navigation').getByText('Contact')).toBeVisible();
  });

  test('nav Log In links to customer login', async ({ page }) => {
    const loginLink = page.getByRole('navigation').getByRole('link', { name: 'Log In' });
    await expect(loginLink).toHaveAttribute('href', /app\.nexuscare\.io\/login|login/);
  });

  test('Request Demo button is visible in nav', async ({ page }) => {
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Request Demo' })).toBeVisible();
  });

  test('hero section renders', async ({ page }) => {
    const hero = page.locator('#hero, [data-section="hero"], header, section').first();
    await expect(hero).toBeVisible();
  });

  test('features section exists', async ({ page }) => {
    await expect(page.locator('#features')).toBeAttached();
  });

  test('how-it-works section exists', async ({ page }) => {
    await expect(page.locator('#how-it-works')).toBeAttached();
  });

  test('audience section exists', async ({ page }) => {
    await expect(page.locator('#audience')).toBeAttached();
  });

  test('get-started / demo section exists', async ({ page }) => {
    await expect(page.locator('#get-started')).toBeAttached();
  });

  test('footer is present', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });

  test('footer Privacy Policy link goes to /privacy-policy', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'Privacy Policy' });
    await expect(link).toHaveAttribute('href', '/privacy-policy');
  });

  test('footer Terms of Service link goes to /terms-of-service', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'Terms of Service' });
    await expect(link).toHaveAttribute('href', '/terms-of-service');
  });

  test('footer Platform links use absolute paths', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/#features');
    await expect(footer.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/#how-it-works');
    await expect(footer.getByRole('link', { name: "Who It's For" })).toHaveAttribute('href', '/#audience');
  });

  test('footer Customer Login links externally', async ({ page }) => {
    const link = page.locator('footer').getByRole('link', { name: 'Customer Login' });
    await expect(link).toHaveAttribute('href', /nexuscare\.io\/login|login/);
  });
});

// ── Privacy Policy ─────────────────────────────────────────────────────────────

test.describe('Privacy Policy page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/privacy-policy');
  });

  test('loads without errors', async ({ page }) => {
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('contains Privacy Policy heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /privacy policy/i })).toBeVisible();
  });

  test('nav links use correct absolute paths', async ({ page }) => {
    const nav = page.getByRole('navigation');
    await expect(nav.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/#features');
    await expect(nav.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/#how-it-works');
    await expect(nav.getByRole('link', { name: "Who It's For" })).toHaveAttribute('href', '/#audience');
  });

  test('nav Request Demo uses absolute path', async ({ page }) => {
    const link = page.getByRole('navigation').getByRole('link', { name: 'Request Demo' });
    await expect(link).toHaveAttribute('href', '/#get-started');
  });

  test('footer Platform links use absolute paths', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/#features');
    await expect(footer.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/#how-it-works');
  });

  test('contains security@ contact', async ({ page }) => {
    await expect(page.getByText(/security@nexuscare\.io/i)).toBeVisible();
  });

  test('clicking nav logo goes to homepage', async ({ page }) => {
    await page.locator('header a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });
});

// ── Terms of Service ──────────────────────────────────────────────────────────

test.describe('Terms of Service page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/terms-of-service');
  });

  test('loads without errors', async ({ page }) => {
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('contains Terms of Service heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /terms of service/i })).toBeVisible();
  });

  test('nav links use correct absolute paths', async ({ page }) => {
    const nav = page.getByRole('navigation');
    await expect(nav.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/#features');
    await expect(nav.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/#how-it-works');
  });

  test('footer Platform links use absolute paths', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/#features');
    await expect(footer.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/#how-it-works');
  });

  test('contains security@ contact', async ({ page }) => {
    await expect(page.getByText(/security@nexuscare\.io/i)).toBeVisible();
  });

  test('footer Privacy Policy link navigates correctly', async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL('/privacy-policy');
  });
});

// ── Navigation between pages ──────────────────────────────────────────────────

test.describe('Cross-page navigation', () => {
  test('homepage → Privacy Policy → back', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL('/privacy-policy');
    await expect(page.getByRole('heading', { name: /privacy policy/i })).toBeVisible();
  });

  test('homepage → Terms of Service → back', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Terms of Service' }).click();
    await expect(page).toHaveURL('/terms-of-service');
    await expect(page.getByRole('heading', { name: /terms of service/i })).toBeVisible();
  });

  test('unknown route shows 404', async ({ page }) => {
    await page.goto('/not-a-real-page');
    await expect(page.getByText(/404|not found/i)).toBeVisible();
  });
});
