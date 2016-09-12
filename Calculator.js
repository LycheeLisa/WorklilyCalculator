//Global Variables
var jobtype = "";
var time = "";
var jobname = "";
var skill = 0;
var skillmultiplier = "";
//Change the drop down menu's primary text to the text of the option selected
$(document).ready(function() {
    $(".menuitem").click(function () {
        var x = $(this).text(); // Get the button text
        var parent = $(this).closest("div").find("button").attr("id");
        $("#" + parent).html(x);
    });
    $(".jobtype").click(function () {
        jobname = $(this).attr("id");
        //Security skill multipliers, skill values taken from excel spreadsheet
        if (jobname == "security"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 2.4;}
                if (skillmultiplier == "advanced") {
                    skill = 3.8;}
                if (skillmultiplier == "expert") {
                    skill = 5;}
            });
        }
        //IT & Networking multipliers
        if (jobname == "networking"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.6;}
                if (skillmultiplier == "advanced") {
                    skill = 2.2;}
                if (skillmultiplier == "expert") {
                    skill = 3.9;}
            });
        }
        //Developer multipliers
        if (jobname == "developer"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.5;}
                if (skillmultiplier == "advanced") {
                    skill = 2.1;}
                if (skillmultiplier == "expert") {
                    skill = 6.6;}
            });
        }
        //Analytics multipliers
        if (jobname == "analytics"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.4;}
                if (skillmultiplier == "advanced") {
                    skill = 1.8;}
                if (skillmultiplier == "expert") {
                    skill = 2.8;}
            });
        }
        //Sales and marketing multipliers, data from upwork best rated
        if (jobname == "sales"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.55;}
                if (skillmultiplier == "advanced") {
                    skill = 2.1;}
                if (skillmultiplier == "expert") {
                    skill = 6.6;}
            });
        }
        //IoT multipliers, data from upwork best rated
        if (jobname == "IoT"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.3;}
                if (skillmultiplier == "advanced") {
                    skill = 1.6;}
                if (skillmultiplier == "expert") {
                    skill = 3.7;}
            });
        }
    });
//Make the total earned change dynamically with changes in drop down menu selection
    $(".jobtype").click(function () {
        jobtype = $(this).attr("value");
        $("#total").html("$" + (time * jobtype * skill).toFixed(0));
    $(".skill").click(function () {
        $("#total").html("$" + (time * jobtype * skill).toFixed(0));
    $(".hours").click(function () {
        time = $(this).attr("value");
        $("#total").html("$" + (time * jobtype * skill).toFixed(0));
    });
    });
    });
});

