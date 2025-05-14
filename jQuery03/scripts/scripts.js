$(document).ready(function() {
    $("#up").click(function() {
        $("#move").stop().animate({top: "-=10px"}, 300);
        updateStatus("Moved up 10px");
    });
    
    $("#down").click(function() {
        $("#move").stop().animate({top: "+=10px"}, 300);
        updateStatus("Moved down 10px");
    });
    
    $("#left").click(function() {
        $("#move").stop().animate({left: "-=10px"}, 300);
        updateStatus("Moved left 10px");
    });
    
    $("#right").click(function() {
        $("#move").stop().animate({left: "+=10px"}, 300);
        updateStatus("Moved right 10px");
    });
    
    $("#stop-btn").click(function() {
        $("#move").stop(true);
        updateStatus("Animation stopped");
    });
    
    $("#chain").click(function() {
        updateStatus("Starting chained animation...");
        $("#move")
            .stop(true)
            .animate({left: "+=200px"}, 800)
            .animate({top: "+=100px"}, 800)
            .animate({left: "-=200px"}, 800)
            .animate({top: "-=100px"}, 800, function() {
                updateStatus("Chained animation complete!");
            });
    }); 
    function updateStatus(message) {
        $("#status").text(message);
    }
});

$(document).ready(function(){
  $("#callback").click(function(){
    $("#cat").hide("slow", function(){
      alert("The image is now hidden");
    });
  });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(3000);
    });
    
    $("#stop").click(function(){
        $("#panel").stop(true); 
    });
});