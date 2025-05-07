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
      $("#j1Cat").toggle();
    });
  });
  $(document).ready(function(){
    $("#fade-div").click(function(){
      $("#j2").fadeToggle();
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#slide-div").slideToggle("slow");
    });
  });

//   $(document).ready(function(){
//     $("#hide-div").click(function(){
//       $("#chosen-div").hide();
//     });
// });