<?php
namespace Snapwikiskin;

use Config;
use ResourceLoader;
use ResourceLoaderContext;

class Hooks {
	public static function getsnapwikiskinWvuiSearchResourceLoaderConfig(
		ResourceLoaderContext $context,
		Config $config
	) {
		return $config->get( 'snapwikiskinWvuiSearchOptions' );
	}
}