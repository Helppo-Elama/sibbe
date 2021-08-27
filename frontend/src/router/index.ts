import { companyData } from "@d/company/company.data"
import Home from "@v/Home.vue"
import Vue from "vue"
import VueMeta from "vue-meta"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/accommodation.html",
		name: "Accommodation",
		component: () => import(/* webpackChunkName: "accomodation" */ "@v/Accommodation.vue")
	},
	{
		path: "/conference.html",
		name: "Conference",
		component: () => import(/* webpackChunkName: "conference" */ "@v/Conference.vue")
	},
	{
		path: "/booking.html",
		name: "Booking",
		component: () => import(/* webpackChunkName: "booking" */ "@v/Booking.vue")
	},
	{
		path: "/siteminder",
		beforeEnter() {
			window.location.href = "https://direct-book.com/properties/alarautaoydirect"
		}
	},
	{
		path: "/cafe.html",
		name: "Cafe",
		component: () => import(/* webpackChunkName: "cafe" */ "@v/Cafe.vue")
	},
	{
		path: "/festivity.html",
		name: "Festivity",
		component: () => import(/* webpackChunkName: "restaurant" */ "@v/Festivity.vue")
	},
	{
		path: "/recreation.html",
		name: "Recreation",
		component: () => import(/* webpackChunkName: "recreation" */ "@v/Recreation.vue")
	},
	{
		path: "/restaurant.html",
		name: "Restaurant",
		component: () => import(/* webpackChunkName: "restaurant" */ "@v/Restaurant.vue")
	},
	{
		path: "/contact.html",
		name: "Contact",
		component: () => import(/* webpackChunkName: "contact" */ "@v/Contact.vue")
	},
	{
		path: "/mail",
		beforeEnter() {
			window.location.href = companyData.getEmailLink("company")
		}
	},
	{
		path: "/salesmail",
		beforeEnter() {
			window.location.href = companyData.getEmailLink("sales")
		}
	},
	{
		path: "*",
		component: Home
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return { x: 0, y: 0, behavior: "smooth" }
	}
})

export default router
