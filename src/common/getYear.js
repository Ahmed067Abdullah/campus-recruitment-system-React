const getYear = year => {
  if (year) return new Date(year).getFullYear();
  return "";
};

export default getYear;
