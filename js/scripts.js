$(document).ready(function() {
  alert("hello");
  $("form").submit(function(event) {
    var favoriteColor = $("#color").val();
    alert(favoriteColor);


    event.preventDefault();
  });
});
