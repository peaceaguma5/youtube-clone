//  words limit
export const wordLimit = (limit: number, text: string): string => {
  return text?.length > limit ? `${text.substring(0, limit)}...` : `${text}`;
};

export const dateFormatter = (date: string): string => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("/");
};
