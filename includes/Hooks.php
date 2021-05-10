<?php
namespace Snapwikiskin;
use ResourceLoader;
class Hooks {
	public static function getsnapwikiskinWvuiSearchResourceLoaderConfig(
		ResourceLoaderContext $context,
		Config $config
	) {
		return $config->get( 'snapwikiskinWvuiSearchOptions' );
	}
}