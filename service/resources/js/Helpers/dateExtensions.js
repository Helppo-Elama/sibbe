export {};

Date.prototype.correctOffset = function (min) {
  this.setTime(this.getTime() - min * 60 * 1000);
  return this;
};

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

Date.prototype.removeDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
};

Date.prototype.toStringWithOffset = function () {
  const date = new Date(this.valueOf());
  date.correctOffset(date.getTimezoneOffset());
  const result = date.toISOString().split("T")[0];
  return result;
};

Date.prototype.toStringYYYYMMDD = function () {
  const date = new Date(this.valueOf());
  const result = date.toISOString().split("T")[0];
  return result;
};

Date.prototype.toISOStringWithOffset = function () {
  const date = new Date(this.valueOf());
  date.correctOffset(date.getTimezoneOffset());
  const result = date.toISOString();
  return result;
};

function parseISOString(string) {
  const b = string.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

String.prototype.ISOStringToDateWithoutOffset = function () {
  const string = this.valueOf();
  const date = parseISOString(string);
  date.correctOffset(-date.getTimezoneOffset());
  return date;
};

String.prototype.ISOStringToDate = function () {
  const string = this.valueOf();
  const date = parseISOString(string);
  return date;
};
