declare module "google" {}
declare module "maps" {}
declare module "MapOptions" {}

declare module "vue/types/vue" {
	interface VueConstructor {
		$googleMapsLoaded: boolean
	}
}
