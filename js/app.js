$("document").ready(function () {
  $("#addBtn").click(function () {
    if ($("#firstRow").children().length === 0) {
      var toDo = [];

      $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        success: function (data) {
          toDo = data;
        },
        Error: function (err) {
          console.log(err);
        },

        beforeSend: function () {
          $("#spin").removeClass("d-none");
        },
        complete: function () {
          $("#spin").toggleClass("d-none");
          $("#addBtn").text("Delete To-Do List");
        },
        async: false,
      });

      // console.log(photo);
      for (var p of toDo) {
        var col1 = `<div class = 'col-md-2 border'>
      <span class='text-uppercase'>${p.id}</span>
      </div>`;
        var col2 = `<div class = 'col-md-8 border'>
      <p class='text-uppercase'>${p.title}</p>
      </div>`;
        var col3 = `<div class = 'col-md-2 border'>
      <p class='text-uppercase'>${p.completed}</p>
      </div>`;

        $("#firstRow").append(col1);
        $("#firstRow").append(col2);
        $("#firstRow").append(col3);
      }
    } else {
      $("#firstRow").empty();
      $("#addBtn").text("Add To-Do List");
    }
  });
});
