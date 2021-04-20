import Vue from "vue";
import { IServiceWorkerEvent } from "@d/interfaces/serviceworker.interface";

export default Vue.extend({
	data(): {
		refreshing: boolean;
		registration: null | ServiceWorkerRegistration;
		updateExists: boolean;
	} {
		return {
			refreshing: false,
			registration: null,
			updateExists: false,
		};
	},
	created() {
		document.addEventListener(
			"serviceworkerupdated",
			(event) => {
				this.updateAvailable(event as IServiceWorkerEvent);
				console.log("(serviceworkerupdated) UPDATEAVAIABLE");
			},
			{ once: true }
		);
		navigator.serviceWorker.addEventListener("controllerchange", () => {
			if (this.refreshing) return;
			this.refreshing = true;
			console.log("RELOAD @ CONTROLLERCHANGE ");
			window.location.reload();
		});
	},
	methods: {
		updateAvailable(event: IServiceWorkerEvent) {
			this.registration = event.detail;
			this.updateExists = true;
			this.refreshApp();
		},
		refreshApp() {
			if (!this.registration?.waiting) return;
			console.log("REFRESHAPP");
			this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
			console.log(this.registration.waiting.postMessage({ type: "SKIP_WAITING" }));
		},
	},
});
