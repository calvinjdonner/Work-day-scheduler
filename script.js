var currentDate = moment().format('MMMM Do YYYY');
var currentHour = parseInt(moment().format('H')); 

for(var hour in localStorage){
    if(localStorage.getItem(hour)) {
       document.getElementById(hour.toString()).innerText = localStorage[hour.toString()];
    }
}

$(".saveBtn").click(function() {
    localStorage['9'] = document.getElementById('9').innerText;
    localStorage['10'] = document.getElementById('10').innerText;
    localStorage['11'] = document.getElementById('11').innerText;
    localStorage['12'] = document.getElementById('12').innerText;
    localStorage['13'] = document.getElementById('13').innerText;
    localStorage['14'] = document.getElementById('14').innerText;
    localStorage['15'] = document.getElementById('15').innerText;
    localStorage['16'] = document.getElementById('16').innerText;
    localStorage['17'] = document.getElementById('17').innerText;
});

console.log(currentDate);
console.log(currentHour);

function displayDate() {
    $("#currentDay").text(currentDate);
}

function rowUpdater() {
    $(".rowHour").each(function() {
        var rowHours = parseInt($(this)[0].id);

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