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

    textArea.attr("id", "name" + i); //give textArea a specific: name + index

    var button = $("<button>"); //dynamically create button element for save button
    button.attr("class", "btn btn-primary col-md-2 saveBtn"); //give savebtn class for bootstrap styling
    button.attr("type", "button");
    button.attr("data-num", i); //give button a data-num attribute and index
    button.text("Save"); //give button Save text

    row.append(hourDiv, textArea, button); //apend hours, textArea, and save button onto row
    $(".container").append(row); //append row onto container class

}


// When saved button is clicked grab text and save it in local storage
$(".saveBtn").on("click", function(){

    //concatenate textArea name and button attribute 
    var myText = $("#name" + $(this).attr("data-num")).val();

    //store myText in localStorage as a string with keyword savedText
    localStorage.setItem("savedText" + $(this).attr("data-num"), JSON.stringify(myText));

});


// Grab data from local storage and display onto textArea 
for(j=0; j < 9; j++){

    //grab text from local storage using keyword + index
    var getText = JSON.parse(localStorage.getItem("savedText" + j));

    //if there text exists then display back onto textArea
    if(getText !== null){
        $("#name" + j).text(getText);
    }
}