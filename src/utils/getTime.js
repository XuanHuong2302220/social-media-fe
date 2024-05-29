export const years = () => {
  const currentDate = new Date().getFullYear() - 5;
  const selectYears = [];

  for (let year = currentDate; year >= 1920; year--) {
    selectYears.push(year);
  }

  return selectYears;
};

const leapsYear = () => {
  const currentDate = new Date().getFullYear();
  let leapYears = [];

  for (let year = 1920; year <= currentDate; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year);
    }
  }

  return leapYears;
};

export const months = () => {
  const selectMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return selectMonths;
};

export const days = ({ month, year }) => {
  const selectDays = [];

  let dayLength = 0;

  const months = ["Jan", "Mar", "May", "July", "Aug", "Oct", "Dec"];

  if (months.includes(month)) dayLength = 31;

  if (month === "Feb") {
    if (leapsYear().includes(parseInt(year))) {
      dayLength = 29;
    } else {
      dayLength = 28;
    }
  } else dayLength = 30;

  for (let day = 1; day <= dayLength; day++) {
    selectDays.push(day);
  }

  return selectDays;
};

export const convertMonths = (month) => {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    July: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  return months[month];
};

export const convertDays = (day) => {
  if (day < 10) return `0${day}`;
  return day;
};
