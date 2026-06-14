# Pickup — Local Pickup Scheduling for WooCommerce

When a WooCommerce order uses **Local Pickup**, Pickup lets the customer choose a
pickup **location** and a **date + time slot** at checkout. The selection is
validated, saved to the order, and shown in the admin order screen and emails.

Self-contained: no custom database tables (selections are stored as order meta)
and no external runtime dependencies.

## Architecture

- `pickup.php` — plugin header, HPOS/Blocks compatibility, activation hook,
  boots on `init:0` and fires `do_action('pickup/booted', Plugin::instance())`.
- `src/Plugin.php` — DI container boot + hook registration.
- `src/Support/SettingsStore.php` — typed read/write over the `pickup_settings`
  option, merged over `config/defaults.php`.
- `src/Service/SlotCalculator.php` — builds the bookable schedule from weekly
  windows + slot length + lead time + horizon, and enforces per-slot capacity.
- `src/Service/CheckoutFields.php` — renders/validates/saves the checkout fields
  (only when Local Pickup is the chosen method); AJAX live slot lookup.
- `src/Service/OrderDisplay.php` — admin order screen, emails, customer pages.
- `src/Admin/Settings.php` — WooCommerce → Pickup management screen.

## Development

```bash
composer install
composer cs        # PHPCS (WordPress security sniffs)
composer analyse   # PHPStan level 6
wp i18n make-pot . languages/pickup.pot --slug=pickup --exclude=vendor,node_modules,tests,assets
```

CI runs PHPCS, PHPStan and the WordPress.org Plugin Check via the reusable
`wppoland/workflows` workflows. `has-js` is `false` (the JS is hand-written,
no build step).

## PRO

The premium companion lives in a separate repository (`wppoland/pickup-pro`) and
boots via `add_action('pickup/booted', ...)`.
