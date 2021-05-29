<?php
namespace Snapwikiskin;

use Config;
use ResourceLoaderContext;
use ResourceLoader;

class Hooks {
	/**
	 * @param ResourceLoaderContext $context
	 * @param Config $config
	 * @return $wgSnapwikiskinWvuiSearchOptions
	 */
	public static function getSnapwikiskinWvuiSearchResourceLoaderConfig(
		ResourceLoaderContext $context,
		Config $config
	) {
		return $config->get( 'SnapwikiskinWvuiSearchOptions' );
	}
}
