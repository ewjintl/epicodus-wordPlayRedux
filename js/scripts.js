$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userInput = $("#userSentence").val().split(" ");
    console.log(userInput);
    
    var newArray = [];
    userInput.forEach(function(string) {
      if (string.length > 2) {
        newArray.push(string);      
      };
    });
    console.log(newArray);
    
    var reversed = newArray.reverse().join(" ");
    console.log(reversed);

    $("#output").empty().append(`${userInput}<br>${newArray.reverse()}<br>${reversed}`).show();

    
  });
});
