export const formatBirthday = (date: any, sort = false) => {
  let convert = "";
  if (!sort) {
    convert =
      date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6, 8);
  } else {
    convert =
      date.slice(6, 8) + "-" + date.slice(4, 6) + "-" + date.slice(0, 4);
  }
  return convert;
};
