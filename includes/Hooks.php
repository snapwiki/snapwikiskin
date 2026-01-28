<?php
namespace MediaWiki\Skins\Snapwikiskin;

use MediaWiki\Config\Config;
use MediaWiki\ResourceLoader\Context;

class Hooks {
	/**
	 * @param ResourceLoaderContext $context
	 * @param Config $config
	 * @return $wgSnapwikiskinWvuiSearchOptions
	 */
	public static function getSnapwikiskinSearchResourceLoaderConfig(
		Context $context,
		Config $config
	) {
		return $config->get( 'SnapwikiskinSearchOptions' );
	}
}
