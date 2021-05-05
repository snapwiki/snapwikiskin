<?php
class Hooks {
    public static function onBeforePageDisplay( OutputPage $out ) {
       $out->addMeta( 'viewport', 'initial-scale=1, maximum-scale=1' );
  }
}
