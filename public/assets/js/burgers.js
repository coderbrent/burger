$(function() {

  $(".delete-burger").on('click', function(event) {
    event.preventDefault();
    const id = $(this).data('id');

<<<<<<< HEAD
    $.ajax('/api/burgers/', + id, {
      type: "PUT",
      data: newConsumptionState
    }).then(() => {
      //location.reload();
=======
    $.ajax('/api/burgers/delete/' + id, {
      type: "DELETE",
    }).then(function() {
      location.reload();
>>>>>>> 1b11805a69217f9f8d02f8e503ab4ef35b29f71a
    })
  });

  $("#new-burger").on('click', event => {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: $("[id=devoured]:checked").val().trim()
    }
    
    $.ajax('api/burgers', {
      method: "POST",
      data: newBurger,
      type: "application/json"
    }).then(function() {
      location.reload();
    });
  })

  $(".change-status").on('click', function(event) {
    event.preventDefault();

    const id = $(this).data('id');
    const newStatus = $(this).data('newstatus')

    const newConsumptionState = {
      devoured: newStatus
    };

    $.ajax('/api/burgers/change/' + id, {
      method: "PUT",
      data: newConsumptionState,
      type: 'application/json'
    }).then(function() {
      location.reload();
    })
  })
})

<<<<<<< HEAD
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
=======


>>>>>>> 1b11805a69217f9f8d02f8e503ab4ef35b29f71a
