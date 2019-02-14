const getTime = time => {
    if(!time) return "";
    let timeString = new Date(time).toString();
    timeString = timeString.slice(0, timeString.length - 42);
    return timeString;
  }
  
  export default getTime;
  