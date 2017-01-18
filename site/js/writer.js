$('#alertHead').hide();

var simplemde = new SimpleMDE({
  autosave: {
    enabled: true,
    uniqueId: "post_autosave",
  },
  indentWithTabs: false,
  lineWrapping: false,
});

$('#btnSubmit').on('click', function () {
  $('#alertHead').hide();
  var post_content = simplemde.value();
  var post_title = $('#txtTitle').val();

  $.post('/writer/update', {
    title: post_title,
    content: post_content,
  }, function(data) {
    console.log(data);
    console.log(data.state);
    if (data['status'] == "ok") {
      $('#alertHead').addClass('alert-success');
    } else {
      console.log(data["status"]);
      $('#alertHead').addClass('alert-danger');
    }
    $('#alertHead').toggle(100);
  });

});


