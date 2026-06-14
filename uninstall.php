<?php
/**
 * Uninstall cleanup for Pickup.
 *
 * Runs when the plugin is deleted from wp-admin. Removes the options Pickup
 * creates. Per-order pickup meta (_pickup_location / _pickup_date /
 * _pickup_slot) is intentionally left in place: it is order history that must
 * survive plugin removal for accounting and fulfilment records.
 *
 * @package Pickup
 */

declare(strict_types=1);

defined('WP_UNINSTALL_PLUGIN') || exit;

delete_option('pickup_settings');
delete_option('pickup_db_version');
