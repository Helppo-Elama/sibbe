import "./dateExtensions";

export const getDays = function (start, end) {
  const days = [];
  let day = start;
  while (day <= end) {
    days.push(day.toStringYYYYMMDD(day));
    day = day.addDays(1);
  }
  return days;
};
