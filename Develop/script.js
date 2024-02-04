$(function () {
  // Display current date
  let currentDate = new Date();
  let options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  let rightNow = currentDate.toLocaleDateString(undefined, options);
  $("#currentDay").html(rightNow);



// Saves to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

// gets from local storage
$(".time-block").each(function() {
  let time = $(this).attr("id");
  $(this).find(".description").val(localStorage.getItem(time));
});

});