var jobtype = "";
var skill = "";
var time = "";
$(document).ready(function() {
    $(".menuitem").click(function () {
        var x = $(this).text(); // Get the button text
        var parent = $(this).closest("div").find("button").attr("id");
        $("#" + parent).html(x);
    });
    $(".jobtype").click(function () {
        jobtype = $(this).attr("value");
        $("#total").html("$" + time * jobtype * skill);
    $(".skill").click(function () {
        skill = $(this).attr("value");
        $("#total").html("$" + time * jobtype * skill);
    $(".hours").click(function () {
        time = $(this).attr("value");
        $("#total").html("$" + time * jobtype * skill);
    });
    });
    });
});

