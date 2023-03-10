function createTask(e url){
    e.preventDefault()
    
    let taskInput = $('#task'),
        input = taskInput.val().trim(),
        task;
  
    if (input !== '') {
      //creating task object
      task = {
        task: input
      };
      //clearing input
      taskInput.val('');
      $.ajax({
        url: `/api/task/${id}`,
        type: 'POST',
        data: task,
        success: function (response){
          //reloading the page to reflect changes
          window.location.href = '/';  
        },
        error: function (err){
          console.log(err);
        }
      });
    }
  }
  
  //function to remvove uncompleted tasks.  Requires users to
  //confirm deletion
  function remove(id){
    let remove = confirm('Giving up already by deleteing your daily tasks? You haven\'t even touch it or completed it yet!  No one likes a quitter or a loser...')
    if (remove){
      $.ajax({
        url: 'api/task/'+id,
        type: 'DELETE',
        success: function (response){
          location.reload()
        },
        error: function (err){
          console.log(err);
        }
      });
    }
  }
  
  //function to change task from incomplete to complete
  function complete(id){
    $.ajax({
      url: 'api/task/'+id,
      method: 'PUT',
      success: function (result){
        location.reload();
      },
      error: function (err){
        console.log(err);
      }
    });
  }
  
  //functoin to remove completed tasks.  No confirmation for deletion
  function removeCompleted(id){
    $.ajax({
      url: `api/task/${id}`,
      type: 'DELETE',
      success: function (response){
        location.reload();
      },
      error: function (err){
        console.log(err);
      }
    })
  }
  
  //function that is called to edit the name of a task
  function editTask(e, id){
    e.preventDefault()
  
    let taskInput = $('#editTask'),
        input = taskInput.val().trim(),
        task;
  
    if (input !== '') {
      //creating task object
      task = {
        task: input,
        _id: id
      }
      //clearing inputs
      taskInput.val('');
      $.ajax({
        url: '/api/update',
        type: 'POST',
        data: task,
        success: function (response){
          //redirecting back to the main page
          window.location.href = '/';  
        },
        error: function (err){
          console.log(err);
        }
      });
    }
  } 