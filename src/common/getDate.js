const getTime = time => {
    let timeString = new Date(time).toString();
    timeString = timeString.slice(0, timeString.length - 42);
    return timeString;
  }
  
  export default getTime;
  