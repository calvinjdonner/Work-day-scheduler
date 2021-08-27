var currentDate = moment().format('MMMM Do YYYY');
var currentHour = parseInt(moment().format('H'));

console.log(currentDate);
console.log(currentHour);

function displayDate() {
    $("#currentDay").text(currentDate);
}

// if(myFloat < currentHour) {
//     $(".future").last().addClass(".past").removeClass(".future");
// }

function rowUpdater() {
    $(".rowHour").each(function() {
        var rowHours = parseInt($(this)[0].id);
        console.log(rowHours);

        if(rowHours < currentHour) {
           $(this).addClass("past") 
        }

        else if(rowHours === currentHour){
            $(this).removeClass("past").addClass("present")
        }

        else {
            $(this).removeClass("present").addClass("future")
        }
    })   
}

rowUpdater();

displayDate();
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