// Global variables
var hours = ["09AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var today = moment().format('LL');
var currentHour = moment().format('hA');


// Display current date onto scheduler
$("#currentDay").text(today);


// Append hours onto schedule
for(i=0; i < hours.length; i++){
    
    var row = $("<div>"); //dynamically create div element for row
    row.attr("class", " row time-block"); //add class attribute to row
    
    var hourDiv = $("<div>") //dynamically create div element for hours
    hourDiv.attr("class", "col-md-2 hour");
    hourDiv.text(hours[i]); //add hours text to hourDiv

    var textArea = $("<textArea>"); //dynamically add textArea element 

    //if the current hour is the same as hour selected then add present class to textArea
    if(currentHour === hours[i]){
        textArea.attr("class", "form-control col-md-8 present"); 
    }

    else if(currentHour < hours[i]){
        textArea.attr("class", "form-control col-md-8 future");
    }
    else{
        textArea.attr("class", "form-control col-md-8 past");
    }

}