$(document).ready(function () {
  console.log("ready");
  //listening to submit button to add a new burger
  $(document).on("click", "#burgerbtn", function (event) {
    event.preventDefault();
    console.log("button clicked");

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };
    // ajax call to sent the post req
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
        console.log("added a burger");
        location.reload();
    });
  });

  //listener for the devour button
});
