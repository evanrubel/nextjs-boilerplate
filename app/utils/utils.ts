export const getTimeOfDayString = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour < 4) {
    return "evening";
  } else if (currentHour < 12) {
    return "morning";
  } else if (currentHour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
};
