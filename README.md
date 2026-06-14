# Pickup - Local Pickup Scheduling for WooCommerce

Pickup adds click-and-collect scheduling to WooCommerce. When an order uses WooCommerce **Local Pickup**, the customer chooses a pickup location and a date and time slot right at checkout. The selection is validated, saved to the order, and shown in the admin order screen and in the order emails.

Slots are generated from the weekly opening windows you define, using your chosen slot length, minimum lead time and booking horizon. Each slot has a capacity, so once a location and time is fully booked it stops being offered — no double-booking.

## Features

- Pickup location chooser at checkout, from an admin-defined list you can enable or disable per location.
- Date and time-slot picker driven by your weekly opening hours.
- Configurable slot length, per-slot capacity, lead time and booking horizon.
- Live slot availability — full or past-lead-time slots are hidden automatically.
- Pickup details shown in the admin order screen, order emails and the customer's order and thank-you pages.
- Store-timezone aware and self-contained: no custom tables, no external services.

## Installation

1. Upload the plugin to `/wp-content/plugins/pickup`, or install it via **Plugins → Add New**.
2. Activate it. WooCommerce must be active, with Local Pickup enabled in your shipping settings.
3. Define your pickup locations and opening windows under **WooCommerce → Pickup**.

## Frequently Asked Questions

**When do the pickup fields appear at checkout?**
Only when Local Pickup is the chosen shipping method. For every other method the fields stay hidden and are never required.

**Can two customers book the same slot?**
No. Each slot has a capacity, and once it is full it is no longer offered, so there is no double-booking.

Built by WPPoland — https://plogins.com

License: GPL-2.0-or-later
