    var now = moment().format("dddd, MMMM Do");
    $("#currentDay").text(now);
    const currentHour = moment().format("HH");
    console.log(currentHour);
  
    $(".time-div").each(function() {
      const timeDiv = $(this).attr("id").split("-")[1];
      $(this).toggleClass("past", currentHour > timeDiv);
      $(this).toggleClass("present", currentHour == timeDiv);
      $(this).toggleClass("future", currentHour < timeDiv);
      $(this).find(".time-block").prop("disabled", currentHour > timeDiv);
    });
  
    $(".saveBtn").click(function(event) {
      event.preventDefault();
      const value = $(this).siblings(".time-block").val();
      const time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    $("#hour-09 .time-block, #hour-10 .time-block, #hour-11 .time-block, #hour-12 .time-block, #hour-13 .time-block, #hour-14 .time-block, #hour-15 .time-block, #hour-16 .time-block, #hour-17 .time-block").each(function() {
      const timeId = $(this).closest(".time-div").attr("id").split("-")[1];
      $(this).val(localStorage.getItem(timeId));
    });
  
    $("#clearFieldsBtn").click(function(event) {
      event.preventDefault();
      $("textarea").val("");
      localStorage.clear();
    });

  