export const dateFormat = (date) => {
  if (!String(date).match(new RegExp("[0-9]{10,13}"))) return null;
  return new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(date) * 1000);
};


export const timeAgo = (secondsAgo) => {
  // if the number of seconds is not defined, return null
  if (!secondsAgo) return null;

  // calculate the number of seconds that have elapsed since `secondsAgo` seconds ago
  const elapsedSeconds = Math.ceil((Date.now() - secondsAgo * 1000) / 1000);

  // if the elapsed time is less than 60 seconds, display the number of elapsed seconds
  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} sec${elapsedSeconds === 1 ? "" : "s"}`;
  }

  // calculate the number of elapsed minutes
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);

  // if the elapsed time is less than 90 minutes, display the number of elapsed minutes
  if (elapsedMinutes < 90) {
    return `${elapsedMinutes} min${elapsedMinutes === 1 ? "" : "s"}`;
  }

  // calculate the number of elapsed hours and remaining minutes
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const remainingMinutes = elapsedMinutes % 60;

  // if the elapsed time is less than 24 hours, display the number of elapsed hours and remaining minutes
  if (elapsedHours < 24) {
    const hoursString = elapsedHours === 1 ? "hour" : "hours";
    const minutesString = remainingMinutes === 1 ? "min" : "mins";
    return `${elapsedHours} ${hoursString} ${remainingMinutes} ${minutesString}`;
  }

  // calculate the number of elapsed days, hours, and remaining minutes
  const elapsedDays = Math.floor(elapsedHours / 24);
  const remainingHours = elapsedHours % 24;
  const daysString = elapsedDays === 1 ? "day" : "days";
  const hoursString = remainingHours === 1 ? "hour" : "hours";
  const minutesString = remainingMinutes === 1 ? "min" : "mins";

  // if the elapsed time is more than 24 hours, display the number of elapsed days, hours, and remaining minutes
  return `${elapsedDays} ${daysString} ${remainingHours} ${hoursString} ${remainingMinutes} ${minutesString}`;
};