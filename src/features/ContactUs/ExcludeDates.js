function resovleMonth(month) {
    return (month - 1)
}

const excludeDates = [
  new window.Date(2022, resovleMonth(5), 1),
  new window.Date(2022, resovleMonth(5), 2),
  new window.Date(2022, resovleMonth(5), 3),  
];

export default excludeDates;
