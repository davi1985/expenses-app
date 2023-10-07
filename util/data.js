export const getFormattedDate = (date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);

export const getDateMinusDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
