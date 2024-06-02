// eslint-disable-next-line default-param-last
export const currency = (locales: string | string[] = "id-ID", options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    ...options,
  });
};

export const elipsisText = (text: string, limitChar = 30) => {
  if (text && text.length > limitChar) return `${text.substring(0, limitChar).trim()}...`;

  return text;
};

export const getMonthName = (month: number) => {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return monthNames[month];
};

export const getDayName = (day: number) => {
  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  return dayNames[day];
};

export const nthDay = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const isValidDate = (date: Date) => {
  return !Number.isNaN(date.getTime());
};

export const buildDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `Choose ${getDayName(date.getDay())}, ${getMonthName(month)} ${day}${nthDay(day)}, ${year}`;
};

export const formatDefaultDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${getMonthName(month)} ${year}`;
};

export const formatDefaultDateShort = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${getMonthName(month).slice(0, 3)} ${year}`;
};

export const formatDateFullIndonesia = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return date.toLocaleDateString("id-ID", options);
};

export const formatDateInput = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const formatClock = (date: Date) => {
  if (!isValidDate(date)) return "-";

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

export const secondsToTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  if (h === "00") {
    return `${m}:${s}`;
  }

  return `${h}:${m}:${s}`;
};

export const toNormalText = (val: string) => {
  return val
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
