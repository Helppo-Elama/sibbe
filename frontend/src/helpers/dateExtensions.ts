export {};

declare global {
  // to access the global type String
  interface Date {
    correctOffset(min: number): Date;
    addDays(days: number): Date;
    removeDays(days: number): Date;
    toStringWithOffset(): string;
    toISOStringWithOffset(): string;
  }
  interface String {
    ISOStringToDateWithoutOffset(): Date;
  }
}

Date.prototype.correctOffset = function (min: number) {
  this.setTime(this.getTime() - min * 60 * 1000);
  return this;
};

Date.prototype.addDays = function (days: number) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

Date.prototype.removeDays = function (days: number) {
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

Date.prototype.toISOStringWithOffset = function () {
  const date = new Date(this.valueOf());
  date.correctOffset(date.getTimezoneOffset());
  const result = date.toISOString();
  return result;
};

function parseISOString(string: string) {
  const b: string[] | any[] = string.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

String.prototype.ISOStringToDateWithoutOffset = function (): Date {
  const string = this.valueOf();
  const date = parseISOString(string);
  date.correctOffset(-date.getTimezoneOffset());
  return date;
};
