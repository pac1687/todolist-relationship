$(document).ready(function() {
  var currentList;
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-item").val();
    var newList = { name: inputtedListName, tasks: []};
    // $(".list-of-tasks h3").text(inputtedListName);
    // currentList = newList;
    // $("#task-list").empty();


    //empty all tasks
    //add all tasks in currentlist.tasks


    $("div.show-list").append('<p><span class="list">' + inputtedListName + '</span></p>');
    $(".show-list").show();
    $(".on-off").show();

    $(".list").last().click(function() {
      $(".show-list").show();
      $(".list-of-tasks").show();
      $(".list-of-tasks h3").text(inputtedListName);
      currentList = newList;
      $("#task-list").empty();
      currentList.tasks.forEach(function(task) {
        $("div#task-list").append("<p>" + task + "</p>");
      });

    });

    $("input#new-list-item").val("");
  });

  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#new-task-item").val();
    currentList.tasks.push(inputtedTask);

    $("div#task-list").append("<p>" + inputtedTask + "</p>");

    $("input#new-task-item").val("");

  // $("div#show-list").last().click(function() {
  //   $("div#task-list").text(newList.listName);
  // });

  });
});


