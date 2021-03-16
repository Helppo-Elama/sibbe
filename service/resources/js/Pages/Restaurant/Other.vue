<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Ravintola
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div>
            <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
              <div>
                <jet-application-logo class="block h-12 w-auto" />
              </div>

              <div class="mt-8 text-2xl">
                Täältä voit hallita ravintolan asioita.
              </div>
              <div class="mt-6 text-gray-500">BLAH</div>
            </div>

            <div
              class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2"
            >
              <div class="p-6">
                <div class="flex items-center">
                  <div
                    class="ml-4 text-lg text-gray-600 leading-7 font-semibold"
                  >
                    <a href="https://laravel.com/docs">Aukioloajat</a>
                  </div>
                </div>

                <div class="ml-12">
                  <div class="mt-2 text-sm text-gray-500">blaablaa</div>
                </div>
              </div>
              <div class="p-6 border-t border-gray-200 md:border-l">
                <div class="flex items-center">
                  <div
                    class="ml-4 text-lg text-gray-600 leading-7 font-semibold"
                  >
                    Muut
                  </div>
                </div>

                <div class="ml-12">
                  <div class="mt-2 text-sm text-gray-500">blaablaa</div>
                </div>
              </div>
            </div>
              <div class="p-6 border-t border-gray-200">
                <div class="flex items-center">
                  <div
                    class="ml-4 text-lg text-gray-600 leading-7 font-semibold"
                  >
                    Menu
                  </div>
                </div>
                <div class="ml-12">
                  <div class="mt-2 text-sm text-gray-500">bllaablaa</div>
                </div>
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

export default {
  components: {
    AppLayout,
    JetApplicationLogo,
        VueTailwindPicker,
  },
    data() {
    return {
      checkin: "",
    };
  },
};
</script>
