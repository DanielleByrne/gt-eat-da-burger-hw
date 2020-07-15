$(document).ready(function () {
  //listening to submit button to add a new burger
  $("#burgerbtn").on("click", function (event) {
    event.preventDefault();

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

 //listener for devour buttons
  $(".devoured").on("click", function (event) {
    event.preventDefault();

    const id = $(this).data("id");
    const devoured = $(this).data("devoured");
  
    const devouredBurgerState = {
      devoured: devoured,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgerState,
    }).then(function () {
      console.log("changed devour to", devoured);
      location.reload();
    });
  });
});

