$(function() {
  $(".change-status").on('click', (event) => {
    event.preventDefault();

    const id = $(this).data('id');
    const newStatus = $(this).data('isDevoured')

    let newConsumptionState = {
      eaten: newStatus
    };

    $.ajax('/api/burgers/', + id, {
      type: "PUT",
      data: newConsumptionState
    }).then(() => {
      //location.reload();
    })

    //ADD NEW BURGER FUNCTION -> TAKES PLACE WHEN NEW BURGER FORM IS SUBMITTED


  })
})

$(".new-burger").on('submit', (event) => {
  event.preventDefault();
  const newBurger = {
    name: $("#burger-name").val().trim(),
    devoured: $("[name=devoured]:checked").val().trim()
  }

  $.ajax('/api/burgers', {
    type: "POST",
    data: newBurger
  }).then(() => {
    location.reload();
  })
})