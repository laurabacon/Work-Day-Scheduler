$(function () {
  // Display current date
  let rightNow = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").html(rightNow);
  let currentHour = moment().format("HH");
  $(".time-block").each(function() {
    var currentTimeDiv = $(this).attr("id").split("-")[1];
    $(this).toggleClass("present", currentHour == currentTimeDiv);
    $(this).children(".description").toggleClass("present", currentHour == currentTimeDiv);
  });
});
