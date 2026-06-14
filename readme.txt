=== Pickup - Local Pickup Scheduling for WooCommerce ===
Contributors: wppoland
Tags: woocommerce, local pickup, click and collect, scheduling, checkout
Requires at least: 6.5
Tested up to: 7.0
Requires PHP: 8.1
Requires Plugins: woocommerce
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Let customers choose a pickup location and time slot at checkout.

== Description ==

Pickup adds click-and-collect scheduling to WooCommerce. When an order uses
WooCommerce **Local Pickup**, the customer chooses a pickup **location** and a
**date + time slot** right at checkout. The selection is validated, saved to the
order, and shown in the admin order screen and in the order emails.

Slots are generated from the weekly opening windows you define, using your chosen
slot length, minimum lead time and booking horizon. Each slot has a capacity, so
once a location + time is fully booked it stops being offered — no double-booking.

Everything is stored as order meta, so there is no custom database table and the
plugin stays light. The checkout fields only appear when Local Pickup is selected;
for every other shipping method they stay hidden and are never required.

= Features =

* Pickup location chooser at checkout (admin-defined list, enable/disable each).
* Date + time-slot picker driven by your weekly opening hours.
* Configurable slot length, per-slot capacity, lead time and booking horizon.
* Live slot availability — full or past-lead-time slots are hidden automatically.
* Selection validated server-side and saved to the order.
* Pickup details shown in the admin order screen, order emails and the customer's
  order/thank-you pages.
* Store-timezone aware; respects your WordPress date format.
* Self-contained: no custom tables, no external services.
* Translation ready (POT included) and clean uninstall.
* HPOS and cart/checkout blocks compatible.

== Installation ==

1. Upload the plugin to `/wp-content/plugins/pickup`, or install via Plugins → Add New.
2. Activate it. WooCommerce must be active.
3. Make sure WooCommerce **Local Pickup** is enabled under WooCommerce → Settings → Shipping.
4. Go to **WooCommerce → Pickup**, add your locations and weekly opening hours, and
   set the slot length, capacity, lead time and booking horizon.

== Frequently Asked Questions ==

= Does it require WooCommerce? =

Yes. WooCommerce must be installed and active, with a Local Pickup shipping method.

= When do the pickup fields show at checkout? =

Only when the customer's chosen shipping method is WooCommerce Local Pickup. For
all other methods the fields stay hidden and are not required.

= How are time slots generated? =

From your weekly opening windows and the slot length. For example, a 09:00–12:00
window with a 30-minute slot length offers 09:00, 09:30, 10:00 and so on.

= What stops a slot from being over-booked? =

Each slot has a capacity. Once the number of orders booked into a location + date
+ slot reaches that capacity, the slot is no longer offered.

= Does it create database tables? =

No. Selections are stored as order meta, so there is nothing extra to maintain.

== Screenshots ==

1. The pickup location and time-slot fields at checkout.
2. The Pickup settings screen: locations, opening hours and rules.
3. Pickup details on the admin order screen.

== Changelog ==

= 0.1.0 =
* Initial release: pickup location chooser and date/time-slot picker at checkout,
  weekly opening-hours scheduling with slot length, capacity, lead time and
  booking horizon, order + email display, and a WooCommerce settings screen.
