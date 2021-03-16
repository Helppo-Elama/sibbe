import "@/Helpers/dateExtensions";

const apiUrl = process.env.MIX_APP_URL + "/api";

export const getRestaurantLunchApiUrl = (start, end) => {
  const restaurantLunchApiUrl =
    apiUrl +
    "/restaurant/lunch" +
    "?start_date=" +
    start.toStringYYYYMMDD(start) +
    "&end_date=" +
    end.toStringYYYYMMDD(end);
  return restaurantLunchApiUrl;
};
