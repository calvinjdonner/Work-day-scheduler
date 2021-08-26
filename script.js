// $("#currentDate").text(moment().format('MMMM Do YYYY'));

var currentDate = moment().format('MMMM Do YYYY');
var displayDate = document.querySelector("#currentDate");
displayDate.append(currentDate); 