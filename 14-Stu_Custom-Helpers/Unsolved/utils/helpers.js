module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
},
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY

  format_date: (date) => {
 
    var year = date.getFullYear() + 5;
  var month = date.getMonth();
  var day = date.getDate();
  var result = new Date(year + 5, month, day);

return (`${date}/${month}/${year}`);
  },
};
