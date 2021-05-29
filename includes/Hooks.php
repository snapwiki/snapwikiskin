<?php
namespace Snapwikiskin;

use Config;
use ResourceLoaderContext;
use ResourceLoader;

class Hooks {
	/**
	 * @param ResourceLoaderContext $context
	 * @param Config $config
	 * @return $wgsnapwikiskinWvuiSearchOptions
	 */
	public static function getsnapwikiskinWvuiSearchResourceLoaderConfig(
		ResourceLoaderContext $context,
		Config $config
	) {
		return $config->get( 'SnapwikiskinWvuiSearchOptions' );
	}
}
