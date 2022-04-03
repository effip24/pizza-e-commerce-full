const convertTime = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString();
};

const convertDate = (date) => {
  const newDate = new Date(date);

  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  return `${day}/${months[month]}/${year}`;
};

export { convertDate, convertTime };
