<?php
/**
 * Boot order: services listed here are resolved from the container and have
 * their registerHooks() called during Plugin::boot(). Each must implement
 * Pickup\Contract\HasHooks.
 *
 * @package Pickup
 *
 * @return array<class-string>
 */

declare(strict_types=1);

use Pickup\Admin\Settings;
use Pickup\Service\CheckoutFields;
use Pickup\Service\OrderDisplay;

defined('ABSPATH') || exit;

// CheckoutFields is registered in both contexts: the storefront needs the
// checkout hooks, and admin-ajax.php (is_admin() === true) needs the AJAX
// handlers for the live slot lookup.
return is_admin()
    ? [
        CheckoutFields::class,
        OrderDisplay::class,
        Settings::class,
    ]
    : [
        CheckoutFields::class,
        OrderDisplay::class,
    ];
