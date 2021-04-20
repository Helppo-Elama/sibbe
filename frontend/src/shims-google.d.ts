declare module "google" {}
declare module "maps" {}
declare module "MapOptions" {}

import Vue from "vue";

declare module "vue/types/vue" {
	interface VueConstructor {
		$googleMapsLoaded: boolean;
	}
}
