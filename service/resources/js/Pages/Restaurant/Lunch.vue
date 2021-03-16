<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
        Ravintolan lounaslista
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white shadow-xl sm:rounded-lg">
          <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div class="mt-8 text-2xl text-center">Valitse päivämäärä(t)</div>
            <div class="mt-6">
              <v-date-picker
                :value="null"
                :available-dates="datePicker.allowedDateRange"
                :model-config="datePicker.modelConfig"
                :first-day-of-week="2"
                locale="fi"
                @dayclick="datePickerOnClick"
                is-range
                is-expanded
                :columns="$screens({ default: 1, lg: 2 })"
              />
            </div>
            <div class="grid justify-items-stretch">
              <div class="justify-self-center">
                <jet-button
                  class="mt-6 pl-6 pr-6"
                  :disabled="datePicker.disabledBeforeSelecting"
                  @click.native="fetchData"
                >
                  Hae tiedot
                </jet-button>
              </div>
            </div>
            <div class="mt-6">
              <JetSwitch
                label="Aikaraja on rajattu kahden (2) viikon mittaiseksi."
                :disabled="datePicker.disabledWhenSelecting"
                @change="datePicker.removeRangeLimit = !datePicker.removeRangeLimit"
              />
            </div>
            <div class="mt-2">
              <JetSwitch
                label="Menneitä päiviä ei voi muokata."
                :disabled="datePicker.disabledWhenSelecting"
                @change="datePicker.allowPastDate = !datePicker.allowPastDate"
              />
            </div>
            <div class="mt-6 text-green-600">
              <h1>{{ datePicker.selectedDateRange }}</h1>
            </div>
          </div>

          <div class="bg-gray-200 bg-opacity-25">
            <div class="p-6">
              <div v-for="lunch in lunches">
                <div class="p-6 rounded-xl shadow-md">
                  <div class="text-grey-600 text-2xl text-center">
                    {{ parseDate(lunch.date) }}
                  </div>
                  <div
                    v-for="(portion, index) in lunch.json"
                    class="grid grid-cols-1 sm:grid-cols-2"
                  >
                    <div class="sm:col-span-2 pb-3 text-2xl text-gray-700">
                      {{ index + 1 }}. {{ portion.title }}
                    </div>
                    <div class="mr-4">
                      <label class="pb-3">
                        <span class="text-gray-700 block">Nimike</span>
                        <input
                          type="text"
                          class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          :placeholder="portion.title"
                        />
                      </label>

                      <label class="pb-3">
                        <span class="text-gray-700 block">Ainesosat</span>
                        <input
                          type="text"
                          class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          :placeholder="portion.ingredients"
                        />
                      </label>

                      <label class="pb-3">
                        <span class="text-gray-700 block">Hinta</span>
                        <input
                          type="number"
                          class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          :placeholder="portion.price"
                        />
                      </label>
                    </div>
                    <div>
                      <label class="pb-3">
                        <span class="text-gray-700 block">Tarkempi kuvaus</span>
                        <textarea
                          class="block mt-1 w-full h-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          :placeholder="portion.body"
                        />
                      </label>

                      <label class="pb-3 block">
                        <span class="text-gray-700">Allergiatiedot</span>
                        <input
                          type="text"
                          class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          :placeholder="portion.allergenic"
                        />
                      </label>
                      <div class="text-right">
                        <jet-button
                          class="mt-6 pl-6 pr-6"
                          @click.native="fetchData"
                          action="delete"
                        >
                          Poista annos
                        </jet-button>
                        <button class="text-red-600 pl-3 pr-3">Poista annos</button>
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <hr class="my-6" />
                    </div>
                  </div>
                  <button class="text-green-600 text-2xl text-center">Lisää annos</button>
                </div>
              </div>
              <div class="ml-12">
                <div class="mt-2 text-sm text-gray-500">blaablaa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";
import JetSwitch from "@/Jetstream/Switch";
import JetButton from "@/Jetstream/Button";
import "@/Helpers/dateExtensions";
import { getDays } from "@/Helpers/dateArray";
import { axios } from "@/Helpers/axios";
import { getRestaurantLunchApiUrl } from "@/Helpers/apiEndPoints.js";
import { format } from "date-fns";
import fi from "date-fns/locale/fi";
import dummyData from "./dummyData.json";

const now = new Date();
export default {
  components: {
    AppLayout,
    JetApplicationLogo,
    JetSwitch,
    JetButton,
  },
  data() {
    return {
      datePicker: {
        removeRangeLimit: false,
        allowPastDate: false,
        allowedDateRange: { start: now, end: null },
        selectedDateRange: { start: null, end: null },
        disabledWhenSelecting: false,
        disabledBeforeSelecting: true,
      },
      lunches: dummyData,
    };
  },
  watch: {
    "datePicker.allowPastDate": function (val) {
      if (val === false) {
        this.datePicker.allowedDateRange.start = null;
      } else {
        this.datePicker.allowedDateRange.start = now;
      }
    },
    "datePicker.selectedDateRange.end": function (val) {
      if (val !== null) {
        this.datePicker.disabledBeforeSelecting = false;
      } else this.datePicker.disabledBeforeSelecting = true;
    },
  },
  methods: {
    datePickerOnClick(val) {
      const { date } = val;
      date.correctOffset(date.getTimezoneOffset());
      const {
        removeRangeLimit,
        allowPastDate,
        selectedDateRange,
        allowedDateRange,
      } = this.datePicker;
      if (selectedDateRange.start === null || selectedDateRange.end !== null) {
        this.datePicker.disabledWhenSelecting = true;

        selectedDateRange.start = date;
        selectedDateRange.end = null;

        allowedDateRange.start = date;

        if (removeRangeLimit) {
          allowedDateRange.end = date.addDays(14);
        }
      } else if (selectedDateRange.end === null) {
        selectedDateRange.end = date;
        allowedDateRange.end = null;
        if (allowPastDate) {
          allowedDateRange.start = now;
        } else {
          allowedDateRange.start = null;
        }
        this.datePicker.disabledWhenSelecting = false;
      }
    },
    async fetchData() {
      let { start, end } = this.datePicker.selectedDateRange;
      const url = getRestaurantLunchApiUrl(start, end);
      const request = { url: url };
      const response = await axios(request);
      if (response) {
        this.lunches = response;

        console.log(response);
      }
    },
    parseDate(date) {
      const isoString = date + "T12:00:00.000Z";
      const result = format(Date.parse(isoString.ISOStringToDate()), "EEEEEE dd.MM.yyyy", {
        locale: fi,
      });
      //ISO KIRJAIN
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
  },
};
</script>
