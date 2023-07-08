$(document).ready(function(){
    $("#update").click(function(e){
        e.preventDefault();
        $.post("http://localhost:8000",
        {
          Email: $("#email").val(),
          Age: $("#age").val(),
          Contact: $("#contact").val(),
          Gender: $("#gender").val()
        });
      });
  });

