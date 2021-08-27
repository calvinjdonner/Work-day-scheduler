var currentDate = moment().format('MMMM Do YYYY');
var currentHour = parseInt(moment().format('H'));
var myFloat = parseInt("10"); //do I need to have a variable to parse every id or just parse it when I call it for comparison? 

console.log(currentDate);
console.log(currentHour);
console.log(myFloat);

function displayDate() {
    $("p #currentDay").text(currentDate);
}

if(myFloat < currentHour) {
    $(".future").last().addClass(".past").removeClass(".future");
}

//if(hour > currentDate.hour) {
    //$("future present").addClass("past")
    //$("future").removeClass("future present");
    
//}

//if(hour === currentDate.hour) {
    //$("future").addClass("#present")
    //$("future").removeClass("#future past");
    
//}

//if(hour < currentDate.hour) {
    //$("future").addClass("#past")
    //$("future").removeClass("#future");
    
//}

//how to parse the id for all timeblocks???