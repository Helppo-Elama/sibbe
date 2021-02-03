import Vue from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { IgoogleMapsInit } from "@d/interfaces/maps.interface";

const googleInit = Vue.extend({
  data(): {
    loader: string | Loader;
    isOpen: "" | "Avoinna" | "Suljettu";
  } {
    return {
      loader: "",
      isOpen: "",
    };
  },
  methods: {
    googleMaps(googleMapsInit: IgoogleMapsInit): void {
      const {
        apiKey,
        targetRef,
        libraries,
        version,
        mapOptions,
        placeId,
        markerOptions,
        routeDestination,
      } = googleMapsInit;

      this.loader = new Loader({
        apiKey: apiKey,
        libraries: libraries,
        version: version,
      });
      let map: google.maps.Map;
      const el: HTMLElement | null = this.$refs[targetRef] as HTMLElement;

      // PROXY FOR GOOGLE MAP GET DETAILS
      const setIsOpen = (isOpen: boolean | undefined): void => {
        if (isOpen === true) {
          this.isOpen = "Avoinna";
        } else this.isOpen = "Suljettu";
      };

      this.loader.load().then(() => {
        if (!el) {
          throw "❌ No matching element with id: " + targetRef;
        } else {
          if (mapOptions) {
            map = new google.maps.Map(el, mapOptions);
          } else {
            map = new google.maps.Map(el);
          }
        }
        if (!map) {
          throw "❌ No map!";
        } else {
          const service = new google.maps.places.PlacesService(map);
          if (!placeId) {
            throw "❌ No PlaceID";
          } else {
            service.getDetails(
              {
                placeId: placeId,
                fields: [
                  "name",
                  "formatted_address",
                  "geometry",
                  "opening_hours",
                  "utc_offset_minutes",
                ],
              },
              function (place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                  throw "google.maps.places.PlacesServiceStatus not OK!";
                } else {
                  let marker: google.maps.Marker;
                  if (!place.geometry) {
                    throw "❌ place.geometry is unset/undefined";
                  } else {
                    const isOpen = place.opening_hours?.isOpen();
                    setIsOpen(isOpen);
                    marker = new google.maps.Marker({
                      map: map,
                      position: place.geometry.location,
                      animation: markerOptions.animation,
                      icon: markerOptions.icon,
                    });
                  }
                  const position:
                    | google.maps.LatLng
                    | null
                    | undefined = marker.getPosition();
                  if (!position) {
                    throw "❌ Did not get position from marker";
                  } else {
                    map.setCenter(position);
                  }
                  const infowindow = new google.maps.InfoWindow();
                  if (!infowindow) {
                    throw "Could not initialize InfoWindow";
                  } else {
                    infowindow.setContent(
                      "<div style='font-size: 130%;' class='color-dark'><strong>" +
                        place.name +
                        "</strong><br><br>" +
                        place.formatted_address +
                        "<br><br>" +
                        '<a class="color-dark" href="https://www.google.com/maps/dir/?api=1&destination=' +
                        routeDestination +
                        '">Reittiohjeet</a></div>'
                    );
                    google.maps.event.addListener(marker, "click", function () {
                      infowindow.open(map, marker);
                    });
                  }
                }
              }
            );
          }
        }
      });
    },
  },
});
export { googleInit };
