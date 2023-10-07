export const getFormattedDate = (date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
