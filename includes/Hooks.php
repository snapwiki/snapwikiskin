<?php
use ResourceLoader;
public static function onResourceLoaderRegisterModules( ResourceLoader $rl ) {
		if ( $rl->isModuleRegistered( 'wvui' ) ) {
			$module = [
				'localBasePath' => __DIR__ . '/..',
				'remoteExtPath' => 'snapwikiskin',
				'dependencies' => [
					'mediawiki.util',
				],
				"packageFiles" => [
					"resources/skins.snapwikiskin.search/skins.snapwikiskin.search.js",
					"resources/skins.snapwikiskin.search/App.vue"
				],
				"dependencies" => [
					"wvui"
				],
				"messages" => [
					"search",
					"searchresults",
					"searchsuggest-containing"
				],
			];
			$rl->register( 'skins.snapwikiskin.search', $module );
		}
	}