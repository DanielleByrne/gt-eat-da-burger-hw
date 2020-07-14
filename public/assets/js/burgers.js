$(function () {
    //listening to submit button to add a new burger 
  $(".burger-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };
    //ajax call to sent the post req
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added a burger");
      location.reload();
    });
  });
});