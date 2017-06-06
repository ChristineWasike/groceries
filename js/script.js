


$(document).ready(function() {
  $("#groceries").submit(function(event) {
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    $("#water h3").show(allItems);
    var allItems = (item1 + item2 + item3).split("");
    console.log(allItems);
    console.log(item1);
    console.log(item2);
    console.log(item3);
    event.preventDefault();
  });
});
