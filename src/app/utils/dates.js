export const isItHere = (year) => {
  const today = new Date();
  const date = new Date(year, 11, 15);

  if (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
};

export const isItPast = (year) => {
  const today = new Date();
  const date = new Date(year, 11, 15);
  return today > date;
};
