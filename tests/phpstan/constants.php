<?php
/**
 * Constants needed by PHPStan to analyse the plugin without bootstrapping WordPress.
 *
 * @package Pickup
 */

declare(strict_types=1);

namespace {
    if (! defined('ABSPATH')) {
        define('ABSPATH', '/tmp/wordpress/');
    }
    if (! defined('PICKUP_DIR')) {
        define('PICKUP_DIR', '/tmp/pickup/');
    }
    if (! defined('PICKUP_URL')) {
        define('PICKUP_URL', 'https://example.test/wp-content/plugins/pickup/');
    }
    if (! defined('WP_UNINSTALL_PLUGIN')) {
        define('WP_UNINSTALL_PLUGIN', true);
    }
}

namespace Pickup {
    if (! defined('Pickup\\VERSION')) {
        define('Pickup\\VERSION', '0.1.0');
    }
    if (! defined('Pickup\\PLUGIN_FILE')) {
        define('Pickup\\PLUGIN_FILE', '/tmp/pickup/pickup.php');
    }
}
