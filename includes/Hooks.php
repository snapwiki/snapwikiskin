<?php
use ResourceLoader;
class Hooks {
public static function onResourceLoaderRegisterModules( ResourceLoader $rl ) {
	public static function getVectorWvuiSearchResourceLoaderConfig(
		ResourceLoaderContext $context,
		Config $config
	) {
		return $config->get( 'VectorWvuiSearchOptions' );
	}
}