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
							'display-3': $vuetify.breakpoint.mdAndUp
						}"
					>
						Varaa huone tai tarkista saatavuus
					</h3>
				</v-col>
			</v-row>
			<v-row class="ma-0 light-on-green full-height pt-16 pb-16 px-5">
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
					<div v-if="!siteminderLoaded.first"><Loading :text="'Haetaan tietoja'" /></div>
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
									<SmallCarousel :images="selectedRoom.images" />
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
								<v-col cols="12" md="6" offset-md="3">
									<h2 v-if="selectRoomIndex === false"></h2>
									<div v-else>
										<v-date-picker
											v-model="dates.selectedDates"
											elevation="2"
											range
											full-width
											@click:month="monthClick"
											:first-day-of-week="1"
											selected-items-text=""
											:min="dates.minDate"
											:max="dates.maxDate"
											:allowed-dates="getAvailableDates"
											:events="getEventDates"
											selected-item-text=""
											ref="datePicker"
										></v-date-picker>
										<div class="text-center pt-2" v-if="!siteminderLoaded.more">
											<Loading :text="'Haetaan lisää kuukausia'" />
										</div>
										<v-btn :disabled="!!siteminderLink.disabled" class="thertiary mt-10">
											<a v-if="!siteminderLink.show" :href="siteminderLink.url">Valitse päivät</a>
											<a v-else :href="siteminderLink.url">Siirry varaamaan</a>
										</v-btn>
									</div>
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
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import SmallCarousel from "@c/common/SmallCarousel.vue"
import Header from "@c/Header.vue"
import Loading from "@c/Loading.vue"
import {
	bookingData,
	bookingRooms as rooms,
	createApiURL,
	createBookingURL
} from "@d/booking/booking.data"
import { bookingHeaderImages as headerImages } from "@d/booking/booking.images"
import { companyData } from "@d/company/company.data"
import { bookingErrors as errors, IErrors } from "@d/errors"
import {
	IBookingData,
	isISiteminder,
	ISiteminder,
	ISiteminderArray
} from "@d/interfaces/booking.interface"
import { ICompanyData } from "@d/interfaces/company.interface"
import { IHeaderImages } from "@d/interfaces/images.interface"
import { IRoom, IRooms } from "@d/interfaces/rooms.interface"
import { indexOfWithBooleanReturn } from "@h/common"
import { currentMonth, getMonth } from "@h/dateArray"
import { addDays, ISOStringToDate, removeDays } from "@h/dateExtensions"
import { booking as metaData } from "@h/metaData"
import { axiosApi as axios, axiosGetBookingDatas as axiosAll } from "@in/axios"
import { format } from "date-fns"
import differenceInCalendarDays from "date-fns/differenceInCalendarDays"
import { fi } from "date-fns/locale"
import clonedeep from "lodash.clonedeep"
import Vue from "vue"

export default Vue.extend({
	name: "Booking",
	metaInfo: { ...metaData },
	components: {
		Header,
		Loading,
		SmallCarousel
	},
	data(): {
		headerImages: IHeaderImages
		bookingData: IBookingData
		companyData: ICompanyData
		siteminder: ISiteminder | undefined
		siteminderLoaded: { first: boolean; more: boolean }
		dates: {
			selectedDates: Array<string>
			maxDate: string
			minDate: string
			availableDates: Array<string>
			availableOne: Array<string>
			availableMore: Array<string>
			availableMoreLength: boolean | undefined
		}
		selectRoomIndex: number
		errors: IErrors
		rooms: IRooms
		parsedSiteminder: boolean
	} {
		return {
			headerImages,
			bookingData: bookingData(),
			companyData,
			siteminder: undefined,
			siteminderLoaded: { first: false, more: false },
			dates: {
				selectedDates: [],
				maxDate: "",
				minDate: "",
				availableDates: [],
				availableOne: [],
				availableMore: [],
				availableMoreLength: undefined
			},
			errors,
			selectRoomIndex: 1,
			rooms,
			parsedSiteminder: false
		}
	},
	computed: {
		siteminderLink(): { disabled: boolean; url?: string } {
			const { selectedDates } = clonedeep(this.dates)
			if (selectedDates.length === 0) {
				return { disabled: true }
			}

			let url: string
			selectedDates.sort()
			if (selectedDates.length === 1) {
				url = createBookingURL({
					start: selectedDates[0],
					end: selectedDates[0],
					id: this.siteminder?.room_types[this.selectRoomIndex].id
				})
			} else {
				url = createBookingURL({
					start: selectedDates[0],
					end: selectedDates[1],
					id: this.siteminder?.room_types[this.selectRoomIndex].id
				})
			}
			return { disabled: false, url }
		},
		selectedRoom(): IRoom | undefined {
			if (this.selectRoomIndex !== undefined) {
				return this.rooms.rooms[this.selectRoomIndex as number]
			}
			return undefined
		},
		companyEmail(): string {
			return companyData.getEmail("company")
		},
		salesEmail(): string {
			return companyData.getEmail("sales")
		},
		selectedMonth(): { year: number; month: number; data: Array<string> } {
			const now = new Date().toISOString()
			const year = now.split("-")[0] as unknown as number
			const month = parseInt(now.split("-")[1], 10) - 1
			const data = currentMonth()
			return { year, month, data }
		},
		dateRangeText(): string {
			const now = new Date().toISOString()
			const { selectedDates } = this.dates
			if (selectedDates.length === 1) {
				if (selectedDates[0] === now) {
					this.setMaxDate(14)
					this.setMinDate()
				} else {
					this.setMaxDate(14)
					this.setMinDate(28)
				}
				return selectedDates[0]
			}
			if (selectedDates.length === 2) {
				this.setMinDate()
				this.setMaxDate()
				this.setDatePickerTitle()
				return selectedDates.join(" - ")
			}
			return "Valitse päivämäärät"
		},
		selectOptionsRooms(): Array<{ i: number; name: string }> {
			const selectOptionsRooms: Array<{ i: number; name: string }> = []
			if (isISiteminder(this.siteminder)) {
				const { room_types } = this.siteminder
				room_types.forEach((room_type, i) => {
					selectOptionsRooms.push({ i, name: this.roomNameShort(this.rooms.rooms[i].title) })
				})
			}
			return selectOptionsRooms
		}
	},
	watch: {
		selectRoomIndex(val, old) {
			if (val !== old) {
				this.roomDateParse(val)
			}
		}
	},
	methods: {
		roomDateParse(i: number): void {
			this.dates.availableDates = []
			this.dates.availableMore = []
			if (isISiteminder(this.siteminder)) {
				const room = this.siteminder.room_types[i]
				room.room_type_dates.forEach((date) => {
					if (date.available !== 0) {
						this.dates.availableDates.push(date.date)
					}
					if (date.available === 2) {
						this.dates.availableMore.push(date.date)
					}
				})
				this.dates.availableMoreLength = this.dates.availableMore.length !== 0
			}
		},
		roomNameShort(roomName: string): string {
			const short = roomName.split(" -")[0]
			return short
		},
		getAvailableDates(date: string): boolean {
			if (this.dates.availableDates.indexOf(date) !== -1) {
				return true
			}
			return false
		},
		getEventDates(date: string): Array<string> | string {
			const available = indexOfWithBooleanReturn(date, this.dates.availableDates)
			const more = indexOfWithBooleanReturn(date, this.dates.availableMore)
			const len = this.dates.availableMoreLength
			if (!len && available) {
				return "#86ba90" // Available, one type
			}
			if (len && available && !more) {
				return "#f5f3bb"
			}
			if (available && more) {
				return ["#86ba90", "#f5f3bb"] // Available, two same type
			}
			return "#cb2631" // Reserved all types
		},
		setDatePickerTitle() {
			const dates = clonedeep(this.dates.selectedDates)
			if (dates.length === 2) {
				const dateTitle = (
					this.$refs.datePicker as Vue
				).$children[0].$children[0].$el.getElementsByClassName(
					"v-picker__title__btn v-date-picker-title__date"
				)[0]
				dates.forEach((date: string, i: number) => {
					dates[i] = format(Date.parse(date), "EEEEEE dd.MM.yyyy", {
						locale: fi
					})
				})
				dateTitle.innerHTML = `<div>${dates.join(" - ")}</div>`
			}
		},
		monthClick(yearAndMonth: string) {
			this.selectedMonth.year = +yearAndMonth?.split("-")[0]
			this.selectedMonth.month = parseInt(yearAndMonth.split("-")[1], 10) - 1
			this.selectedMonth.data = getMonth({
				year: this.selectedMonth.year,
				month: this.selectedMonth.month
			})
		},
		setMinDate(arg?: number | string) {
			let switchArg = arg
			if (!arg) {
				switchArg = "default"
			}
			const now = new Date()
			let minDate: Date
			const maxDate: Date = ISOStringToDate(this.dates.maxDate)
			const diff = differenceInCalendarDays(maxDate, now)
			if (diff < 14) {
				switchArg = "default"
			}
			switch (switchArg) {
				case 28:
					minDate = removeDays(maxDate, 28)
					break
				case 14:
					minDate = removeDays(maxDate, 14)
					break
				default:
					minDate = now
					break
			}
			this.dates.minDate = minDate.toISOString().split("T")[0]
		},
		setMaxDate(arg?: number | string) {
			let switchArg = arg
			if (!arg) {
				switchArg = "default"
			}
			const now = new Date()
			let maxDays = new Date()
			if (this.dates.selectedDates[0] && arg !== "default") {
				const max = `${this.dates.selectedDates[0]}T08:00:00.000Z`
				maxDays = ISOStringToDate(max)
				maxDays = addDays(maxDays, 14)
				switchArg = "max"
			}
			switch (switchArg) {
				case "max":
					this.dates.maxDate = maxDays.toISOString().split("T")[0]
					this.setMinDate(28)
					break
				case 14:
					this.dates.maxDate = addDays(now, 14).toISOString().split("T")[0]
					break
				default:
					this.dates.maxDate = new Date(now.setMonth(now.getMonth() + 12))
						.toISOString()
						.split("T")[0]
					break
			}
		},
		siteminderPush(data: ISiteminder | undefined): void {
			if (isISiteminder(data) && isISiteminder(this.siteminder)) {
				const { room_types } = data
				room_types.forEach((room_type, i) => {
					for (let x = 0; x < room_type.room_type_dates.length; x += 1) {
						this.siteminder?.room_types[i].room_type_dates.push(room_types[i].room_type_dates[x])
					}
				})
			}
		},
		createRequestsForSiteminder() {
			const requests = []
			const daysToAdd = 29
			let { end } = this.bookingData.dateRange
			for (let days = 0; days <= 366; days += daysToAdd) {
				const newStart = addDays(end, 1)
				const newEnd = addDays(newStart, daysToAdd)
				const startString = newStart.toISOString().split("T")[0]
				const endString = newEnd.toISOString().split("T")[0]
				const url = {
					start: startString,
					end: endString
				}
				requests.push({ url: createApiURL(url) })
				end = newEnd
			}
			this.bookingData.dateRange.end = end
			return requests
		},
		async siteminderMore() {
			const requests = this.createRequestsForSiteminder()
			const siteminderMore: ISiteminderArray | undefined = await axiosAll(requests)
			if (siteminderMore) {
				siteminderMore.forEach((s) => {
					this.siteminderPush(s)
				})
			}
			this.siteminderLoaded.more = true
		}
	},
	async mounted(): Promise<void> {
		this.setMaxDate()
		this.setMinDate()
		const { request } = this.bookingData
		const siteminder = await axios<ISiteminderArray>(request)
		this.siteminderLoaded.first = true
		if (Array.isArray(siteminder)) {
			this.parsedSiteminder = true
			this.siteminder = siteminder[0]
			this.selectRoomIndex = 0
			this.siteminderMore()
		}
	}
})
</script>
<style lang="scss" scoped>
a {
	font-weight: bold;
	white-space: nowrap;
}
</style>
