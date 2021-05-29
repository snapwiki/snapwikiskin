<?php
namespace Snapwikiskin;

use Config;
use ResourceLoaderContext;

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
