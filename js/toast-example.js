$(document).ready(function() {

    //Example function call.
    $("#successClick").click(function() {
      toast("success", "Hey, this is a success message! Good job!");
    });

    $("#warningClick").click(function() {
      toast("warning", "Hey, you might want to look at this again!");
    });

    $("#dangerClick").click(function() {
      toast("danger", "Hey, you didn't say the magic word! Try again!");
    });
    
});