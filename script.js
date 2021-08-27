var currentDate = moment().format('MMMM Do YYYY');
var currentHour = parseInt(moment().format('H')); 

var input9 = document.getElementById('9').innerHTML = localStorage['9'];
var input10 = document.getElementById('10').innerHTML = localStorage['10'];
var input11 = document.getElementById('11').innerHTML = localStorage['11'];
var input12 = document.getElementById('12').innerHTML = localStorage['12'];
var input13 = document.getElementById('13').innerHTML = localStorage['13'];
var input14 = document.getElementById('14').innerHTML = localStorage['14'];
var input15 = document.getElementById('15').innerHTML = localStorage['15'];
var input16 = document.getElementById('16').innerHTML = localStorage['16'];
var input17 = document.getElementById('17').innerHTML = localStorage['17'];

$(".saveBtn").click(function() {
    localStorage['9'] = document.getElementById('9').innerHTML;
    localStorage['10'] = document.getElementById('10').innerHTML;
    localStorage['11'] = document.getElementById('11').innerHTML;
    localStorage['12'] = document.getElementById('12').innerHTML;
    localStorage['13'] = document.getElementById('13').innerHTML;
    localStorage['14'] = document.getElementById('14').innerHTML;
    localStorage['15'] = document.getElementById('15').innerHTML;
    localStorage['16'] = document.getElementById('16').innerHTML;
    localStorage['17'] = document.getElementById('17').innerHTML;
});

console.log(currentDate);
console.log(currentHour);

function displayDate() {
    $("#currentDay").text(currentDate);
}

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