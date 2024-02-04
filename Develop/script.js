$(function () {
  // Display current date
  let currentDate = new Date();
  let options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  let rightNow = currentDate.toLocaleDateString(undefined, options);
  $("#currentDay").html(rightNow);

});

// Saves to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

// gets from local storage
$(".time-block").each(function() {
    var time = $(this).parent().attr("id").split("-")[1];
    $(this).val(localStorage.getItem(time));
});

