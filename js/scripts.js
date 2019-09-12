$(document).ready(function() {
  $("form").submit(function(event) {
    $("p").css("backgroud-color", favoriteColor)
    var favoriteColor = $("#color").val();
    Alert(backgroud-color)

    event.preventDefault();
  });
});
