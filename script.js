var currentDate = moment().format('MMMM Do YYYY');
// var displayDate = document.querySelector("#currentDate");
// displayDate.append(currentDate); 

console.log(currentDate);

function displayDate() {
    $("#currentDay").text(currentDate);
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