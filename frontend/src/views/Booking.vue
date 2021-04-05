<template>
	<div class="text-center">
		<Header :images="headerImages" />
		<v-container fluid class="pa-0 ma-0">
			<v-row class="ma-0 green-on-light half-height" align="center" justify="center">
				<v-col cols="12">
					<h3
						class="font-italic text-center pb-16"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Varaa huone tai tarkista saatavuus
					</h3>
				</v-col>
			</v-row>
			<v-row class="ma-0 light-on-green full-height pt-16 pb-16 pl-5 pr-5">
				<v-col cols="12">
					<h2 class="museo museo-heading pb-16">Varaukset</h2>
					<p>
						Voit varata meiltä huoneen joko suoraan tai
						<router-link class="animate" to="/siteminder">
							<v-icon size="20px">{{ "$vuetify.icons.siteminder" }}</v-icon>
							verkkovarausjärjestelmän
						</router-link>
						kautta. Alta voit tarkistaa huonekohtaisen varaustilanteen etukäteen sekä siirtyä
						varausjärjestelmään.
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">Sähköposti</h4>
					<p>
						<router-link to="/mail" class="animate color-light">{{ companyEmail }}</router-link>
						<br />
						<router-link to="/mail" class="animate color-light">{{ salesEmail }}</router-link>
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">Puhelin</h4>
					<p>
						<a :href="'tel:' + companyData.phone" class="animate color-light">{{
							companyData.phone
						}}</a>
					</p>
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 dark-on-light full-height pt-16 pb-16">
				<v-col cols="12">
					<div v-if="!siteminderLoaded"><Loading /></div>
					<div v-else-if="!parsedSiteminder" v-html="errors.parseData"></div>
					<div v-else>
						<v-container>
							<v-row class="dark-on-light">
								<v-col cols="12" md="4">
									<v-select
										:items="selectOptionsRooms"
										item-text="name"
										item-value="i"
										label="Valitse huone"
										outlined
										v-model="selectRoomIndex"
									></v-select>
								</v-col>
								<v-col cols="12" md="8">
									<h1>{{ selectedRoom.title }}</h1>
								</v-col>
								<v-col v-if="parsedSiteminder" cols="12" md="6">
									<RoomCarousel :images="selectedRoom.images" />
								</v-col>
								<v-col cols="12" md="6">
									<h2 v-if="selectRoomIndex === false"></h2>
									<div v-else>
										<v-date-picker
											v-model="dates.selectedDates"
											elevation="2"
											range
											full-width
											@click:month="monthClick"
											:first-day-of-week="1"
											selectedItemsText=""
											:min="dates.minDate"
											:max="dates.maxDate"
											:allowed-dates="getAvailableDates"
											:events="getEventDates"
											selectedItemText=""
											ref="datePicker"
										></v-date-picker>
										<v-text-field
											class="d-none"
											v-model="dateRangeText"
											label="Aikaväli"
											readonly
										></v-text-field>
										<v-btn :disabled="!siteminderLink.show" class="thertiary mt-10">
											<a v-if="!siteminderLink.show" :href="siteminderLink.url">Valitse päivät</a>
											<a v-else :href="siteminderLink.url">Siirry varaamaan</a>
										</v-btn>
									</div>
								</v-col>
								<v-col cols="12" md="6">
									<p v-html="selectedRoom.body"></p>
									<ul class="equipment">
										<u class="museo pb-2">Huoneen lisätiedot</u>
										<li v-for="e in selectedRoom.equipments" :key="e.title" :title="e.title">
											{{ e.title }}
										</li>
									</ul>
								</v-col>
							</v-row>
						</v-container>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import { booking as metaData } from "@h/metaData";
import Header from "@c/Header.vue";

import { bookingHeaderImages as headerImages } from "@d/booking/booking.images";
import { IHeaderImages } from "@d/interfaces/images.interface";

import Loading from "@m/Loading.vue";

import {
	bookingData,
	createApiURL,
	createBookingURL,
	bookingRooms as rooms,
} from "@d/booking/booking.data";

import { currentMonth, getMonth } from "@h/dateArray";
import { IErrors, bookingErrors as errors } from "@d/errors";

import { companyData } from "@d/company/company.data";
import { ICompanyData } from "@d/interfaces/company.interface";
import { IBookingData, ISiteminder, isISiteminder } from "@d/interfaces/booking.interface";

import { IRoom, IRooms } from "@d/interfaces/rooms.interface";

import { axiosGetBookingData as axios } from "@in/axios";

import RoomCarousel from "@m/RoomCarousel.vue";
import { format } from "date-fns";
import fi from "date-fns/locale/fi";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import clonedeep from "lodash.clonedeep";

const contact = Vue.extend({
	name: "Booking",
	metaInfo: { ...metaData },
	components: {
		Header,
		Loading,
		RoomCarousel,
	},
	data(): {
		headerImages: IHeaderImages;
		bookingData: IBookingData;
		companyData: ICompanyData;
		senderForContactForm: string;
		siteminder: ISiteminder | boolean;
		siteminderLoaded: boolean;
		dates: {
			selectedDates: Array<string>;
			maxDate: string;
			minDate: string;
			availableDates: Array<string>;
			availableOne: Array<string>;
			availableMore: Array<string>;
		};
		selectRoomIndex: number | boolean;
		errors: IErrors;
		rooms: IRooms;
	} {
		return {
			headerImages: headerImages,
			bookingData: bookingData(),
			companyData: companyData,
			senderForContactForm: "booking",
			siteminder: false,
			siteminderLoaded: false,
			dates: {
				selectedDates: [],
				maxDate: "",
				minDate: "",
				availableDates: [],
				availableOne: [],
				availableMore: [],
			},
			errors: errors,
			selectRoomIndex: false,
			rooms: rooms,
		};
	},
	computed: {
		siteminderLink(): { show: boolean; url?: string } {
			if (this.dates.selectedDates.length === 0) return { show: false };
			else {
				let url: string;
				if (this.dates.selectedDates.length === 1) {
					url = createBookingURL({
						start: this.dates.selectedDates[0],
						end: this.dates.selectedDates[0],
					});
				} else {
					url = createBookingURL({
						start: this.dates.selectedDates[0],
						end: this.dates.selectedDates[1],
					});
				}
				return { show: true, url: url };
			}
		},
		selectedRoom(): IRoom | boolean {
			if (this.selectRoomIndex !== false) {
				return this.rooms.rooms[this.selectRoomIndex as number];
			} else return false;
		},
		companyEmail(): string {
			return companyData.getEmail("company");
		},
		salesEmail(): string {
			return companyData.getEmail("sales");
		},
		parsedSiteminder(): boolean {
			if (isISiteminder(this.siteminder)) {
				return true;
			} else return false;
		},
		selectedMonth(): { year: number; month: number; data: Array<string> } {
			const now = new Date().toStringWithOffset();
			const year = (now.split("-")[0] as unknown) as number;
			const month = parseInt(now.split("-")[1], 10) - 1;
			const data = currentMonth();
			return { year, month, data };
		},
		dateRangeText(): string {
			const now = new Date().toStringWithOffset();
			if (this.dates.selectedDates.length === 1) {
				if (this.dates.selectedDates[0] === now) {
					this.setMaxDate(14);
					this.setMinDate();
				} else {
					this.setMaxDate(14);
					this.setMinDate(28);
				}
				return this.dates.selectedDates[0];
			}
			if (this.dates.selectedDates.length === 2) {
				this.setMinDate();
				this.setMaxDate();
				this.setDatePickerTitle();
				return this.dates.selectedDates.join(" - ");
			} else {
				return "Valitse päivämäärät";
			}
		},
		selectOptionsRooms(): Array<{ i: number; name: string }> {
			const rooms: Array<{ i: number; name: string }> = [];
			if (isISiteminder(this.siteminder)) {
				const room_types = this.siteminder.room_types;
				const len = room_types.length;
				for (let i = 0; i < len; i++) {
					rooms.push({ i: i, name: this.roomNameShort(room_types[i].name) });
				}
			}
			return rooms;
		},
	},
	watch: {
		selectRoomIndex: function (val, old) {
			if (val !== old) {
				this.roomDateParse(val);
			}
		},
	},
	methods: {
		roomDateParse(i: number): void {
			this.dates.availableDates = [];
			this.dates.availableMore = [];
			if (isISiteminder(this.siteminder)) {
				const room = this.siteminder.room_types[i];
				for (const date of room.room_type_dates) {
					if (date.available !== 0) {
						this.dates.availableDates.push(date.date);
					}
					if (date.available === 2) {
						this.dates.availableMore.push(date.date);
					}
				}
			}
		},
		roomNameShort(roomName: string): string {
			const short = roomName.split(" -")[0];
			return short;
		},
		getAvailableDates(date: string): boolean {
			if (this.dates.availableDates.indexOf(date) !== -1) {
				return true;
			} else {
				return false;
			}
		},
		getEventDates(date: string): Array<string> | string | boolean {
			if (this.dates.availableMore.length === 0 && this.dates.availableDates.indexOf(date) !== -1) {
				return "#86ba90";
			}
			if (
				this.dates.availableMore.length !== 0 &&
				this.dates.availableDates.indexOf(date) !== -1 &&
				this.dates.availableMore.indexOf(date) === -1
			) {
				return "#f5f3bb";
			}
			if (this.dates.availableMore.indexOf(date) !== -1) {
				return ["#86ba90", "#f5f3bb"];
			} else return "#cb2631";
		},
		setDatePickerTitle() {
			const dates = clonedeep(this.dates.selectedDates);
			if (dates.length === 2) {
				const dateTitle = (this.$refs
					.datePicker as Vue).$children[0].$children[0].$el.getElementsByClassName(
					"v-picker__title__btn v-date-picker-title__date"
				)[0];
				dates.forEach((date: string, i: number) => {
					dates[i] = format(Date.parse(date), "EEEEEE dd.MM.yyyy", {
						locale: fi,
					});
				});
				dateTitle.innerHTML = "<div>" + dates.join(" - ") + "</div>";
			}
		},
		monthClick(yearAndMonth: string) {
			this.selectedMonth.year = (yearAndMonth?.split("-")[0] as unknown) as number;
			this.selectedMonth.month = parseInt(yearAndMonth.split("-")[1], 10) - 1;
			this.selectedMonth.data = getMonth({
				year: this.selectedMonth.year,
				month: this.selectedMonth.month,
			});
		},
		setMinDate(arg?: number | string) {
			if (!arg) {
				arg = "default";
			}
			const now = new Date();
			let minDate: Date;
			let maxDate: Date = this.dates.maxDate.ISOStringToDateWithoutOffset();
			let diff = differenceInCalendarDays(maxDate, now);
			if (diff < 14) {
				arg = "default";
			}
			switch (arg) {
				case 28:
					minDate = maxDate.removeDays(28);
					break;
				case 14:
					minDate = maxDate.removeDays(14);
					break;
				default:
					minDate = now;
					break;
			}
			this.dates.minDate = minDate.toISOStringWithOffset();
		},
		setMaxDate(arg?: number | string) {
			if (!arg) {
				arg = "default";
			}
			const now = new Date();
			let maxDays = new Date();
			if (this.dates.selectedDates[0] && arg !== "default") {
				let max: string = this.dates.selectedDates[0] + "T12:00:00.000Z";
				maxDays = max.ISOStringToDateWithoutOffset();
				maxDays = maxDays.addDays(14);
				arg = "max";
			}
			switch (arg) {
				case "max":
					this.dates.maxDate = maxDays.toISOStringWithOffset();
					this.setMinDate(28);
					break;
				case 14:
					this.dates.maxDate = now.addDays(14).toISOStringWithOffset();
					break;
				default:
					this.dates.maxDate = new Date(now.setMonth(now.getMonth() + 12)).toISOStringWithOffset();
					break;
			}
		},
		siteminderPush(data: ISiteminder | boolean): void {
			if (isISiteminder(data) && isISiteminder(this.siteminder)) {
				const { room_types } = data;
				for (const i in room_types) {
					for (const x in room_types[i].room_type_dates) {
						this.siteminder.room_types[i].room_type_dates.push(room_types[i].room_type_dates[x]);
					}
				}
			}
		},
		async siteminderGetMore(): Promise<number> {
			let { end } = this.bookingData.dateRange;
			const url = {
				start: end.addDays(1).toISOString().split("T")[0],
				end: end.addDays(29).toISOString().split("T")[0],
			};
			const request = { url: createApiURL(url) };
			const siteminder = await axios(request);
			if (isISiteminder(siteminder)) {
				this.siteminderPush(siteminder);
				this.bookingData.dateRange.end = end.addDays(29);
				if (isISiteminder(this.siteminder)) {
					return this.siteminder.room_types[0].room_type_dates.length;
				} else return 0; //0 päivää!
			} else return 0; //0 päivää!
		},
	},
	async mounted(): Promise<void> {
		this.setMaxDate();
		this.setMinDate();
		const { request } = this.bookingData;
		const siteminder = await axios(request);
		if (isISiteminder(siteminder)) {
			this.siteminder = siteminder;
			this.siteminderLoaded = true;
			this.selectRoomIndex = 0;
			let days = 0;
			let i = 0;
			let max = Math.ceil(366 / 28);
			while (days <= 366) {
				try {
					days = await this.siteminderGetMore();
					if (i > max) throw "💔 Can't add days to Siteminder";
					i++;
				} catch (err) {
					console.log(err);
					break;
				}
			}
		}
		console.log("🏰 Booking mounted.");
	},
});

export default contact;
</script>
<style lang="scss" scoped>
a {
	font-weight: bold;
	white-space: nowrap;
}
</style>
