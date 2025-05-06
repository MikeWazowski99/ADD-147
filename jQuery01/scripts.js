$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });
  
  $(document).ready(function(){
    $("h2").click(function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("#hide-paragraph").click(function(){
      $("p").hide();
    });
  });

  $(document).ready(function(){
    $("#hide-div").click(function(){
      $("#chosen-div").hide();
    });
  });