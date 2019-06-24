$(() => {

  $(".delete-burger").on('click', event => {
    console.log('this deletes a burger')
    event.preventDefault();

    const id = $(this).data('id');
    console.log(id);
  
    $.ajax('/api/burgers', + id, {
      method: "POST"
    }).then(() => { 
      console.log('burger ' + id  + ' was deleted');
    })
  } )

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
      console.log('return from post burgers')
      location.reload();
    });
  })

  $(".change-status").on('click', (event) => {
    event.preventDefault();

    const id = $(this).data('id');
    const newStatus = $(this).data('devoured')
    console.log('this id is: ' + id);

    const newConsumptionState = {
      eaten: newStatus
    };

    $.ajax('api/burgers/', + id, {
      method: "PUT",
      data: newConsumptionState
    }).then(() => {
      console.log('burger has been consumed,', newStatus);
      location.reload();
    })
  })
})



