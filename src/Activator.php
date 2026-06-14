<?php

declare(strict_types=1);

namespace Pickup;

use Pickup\Support\SettingsStore;

defined('ABSPATH') || exit;

/**
 * Seeds packaged defaults on activation so the settings screen and checkout have
 * sane values immediately, without overwriting an existing configuration.
 */
final class Activator
{
    public static function activate(): void
    {
        if (false === get_option(SettingsStore::OPTION, false)) {
            /** @var array<string, mixed> $defaults */
            $defaults = require PICKUP_DIR . 'config/defaults.php';
            update_option(SettingsStore::OPTION, $defaults, false);
        }
    }
}
