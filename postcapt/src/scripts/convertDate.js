const convertDate = (date) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getHours()}:${date.getMinutes()}`;
};

export default convertDate;
