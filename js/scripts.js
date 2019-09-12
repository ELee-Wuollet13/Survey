$(document).ready(function() {
  $("#colorForm").submit(function(event) {
    debugger;
    var favoriteColor = $("#color").val();
    $("body").css("background-color", favoriteColor);

    event.preventDefault();
  });
});
