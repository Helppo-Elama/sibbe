import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready() {
			console.info("💚 Sibbe served from cache.");
		},
		registered(registration) {
			console.info("💚 Sibbe is registered....");
			setInterval(() => {
				registration.update();
			}, 1000 * 60 * 60); // e.g. hourly checks
		},
		cached() {
			console.info("💛 Sibbe has been cached...");
			//window.location.reload();
		},
		updatefound() {
			console.info("💙 Sibbe is fetching new content...");
		},
		updated(registration) {
			console.info("💙 Sibbe has new content. Trying to refresh...");
			const event = new CustomEvent("serviceworkerupdated", {
				detail: registration,
			});
			if (document.dispatchEvent(event)) {
				console.log("🟢 Sibbe update event dispatched!");
			}
		},
		offline() {
			console.info("🤍 Sibbe served Offline");
		},
		error(error) {
			console.error("❗ Sibbe registration error:", error);
		},
	});
}
