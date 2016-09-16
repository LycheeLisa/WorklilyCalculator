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
//Skill multipliers, skill values taken from excel spreadsheet
    $(".jobtype").click(function () {
        jobname = $(this).attr("id");
        //Application Architect
        if (jobname == "applicationarc"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.29;}
                if (skillmultiplier == "advanced") {
                    skill = 1.58;}
                if (skillmultiplier == "expert") {
                    skill = 2.63;}
            });
        }
        //Application consultant multipliers
        if (jobname == "applicationcon"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.5;}
                if (skillmultiplier == "advanced") {
                    skill = 2;}
                if (skillmultiplier == "expert") {
                    skill = 3.83;}
            });
        }
        //Application Database Administrator multipliers
        if (jobname == "applicationdata"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.34;}
                if (skillmultiplier == "advanced") {
                    skill = 1.69;}
                if (skillmultiplier == "expert") {
                    skill = 3.02;}
            });
        }
        //Application Developer multipliers
        if (jobname == "applicationdev"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.58;}
                if (skillmultiplier == "advanced") {
                    skill = 2.17;}
                if (skillmultiplier == "expert") {
                    skill = 6.61;}
            });
        }
        //Business Analyst multipliers
        if (jobname == "businessana"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.77;}
                if (skillmultiplier == "advanced") {
                    skill = 2.54;}
                if (skillmultiplier == "expert") {
                    skill = 5.84;}
            });
        }
        //Computer Operator multipliers
        if (jobname == "computerop"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.12;}
                if (skillmultiplier == "advanced") {
                    skill = 1.23;}
                if (skillmultiplier == "expert") {
                    skill = 1.69;}
            });
        }
        //Data specialist multipliers
        if (jobname == "datasp"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.43;}
                if (skillmultiplier == "advanced") {
                    skill = 1.86;}
                if (skillmultiplier == "expert") {
                    skill = 2.82;}
            });
        }
        //Delivery Project Executive multipliers
        if (jobname == "delprojex"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.58;}
                if (skillmultiplier == "advanced") {
                    skill = 2.17;}
                if (skillmultiplier == "expert") {
                    skill = 3.52;}
            });
        }
        //Delivery Project Manager multipliers
        if (jobname == "delprojman"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.09;}
                if (skillmultiplier == "advanced") {
                    skill = 1.18;}
                if (skillmultiplier == "expert") {
                    skill = 1.42;}
            });
        }
        //Deskside Support multipliers
        if (jobname == "desksup"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.37;}
                if (skillmultiplier == "advanced") {
                    skill = 1.74;}
                if (skillmultiplier == "expert") {
                    skill = 4.64;}
            });
        }
        //Information Architect multipliers
        if (jobname == "infoarc"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.07;}
                if (skillmultiplier == "advanced") {
                    skill = 1.14;}
                if (skillmultiplier == "expert") {
                    skill = 1.24;}
            });
        }
        //Infrastructure Architect multipliers
        if (jobname == "infraarc"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.55;}
                if (skillmultiplier == "advanced") {
                    skill = 2.1;}
                if (skillmultiplier == "expert") {
                    skill = 3.63;}
            });
        }
        //Infrastructure Specialist multipliers
        if (jobname == "infraspec"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 2.32;}
                if (skillmultiplier == "advanced") {
                    skill = 3.64;}
                if (skillmultiplier == "expert") {
                    skill = 6.82;}
            });
        }
        //Network Services Specialist multipliers
        if (jobname == "networkservspec"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.03;}
                if (skillmultiplier == "advanced") {
                    skill = 1.06;}
                if (skillmultiplier == "expert") {
                    skill = 1.13;}
            });
        }
        //Package Solution Consultant multipliers
        if (jobname == "packagesolu"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.52;}
                if (skillmultiplier == "advanced") {
                    skill = 2.05;}
                if (skillmultiplier == "expert") {
                    skill = 3.36;}
            });
        }
        //Project Administrator multipliers
        if (jobname == "projadmin"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.5;}
                if (skillmultiplier == "advanced") {
                    skill = 2;}
                if (skillmultiplier == "expert") {
                    skill = 3.33;}
            });
        }
        //Project Executive multipliers
        if (jobname == "projexec"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.05;}
                if (skillmultiplier == "advanced") {
                    skill = 1.1;}
                if (skillmultiplier == "expert") {
                    skill = 1.17;}
            });
        }
        //Project Manager multipliers
        if (jobname == "projman"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.69;}
                if (skillmultiplier == "advanced") {
                    skill = 2.38;}
                if (skillmultiplier == "expert") {
                    skill = 4.98;}
            });
        }
        //Security Consultant multipliers
        if (jobname == "securitycon"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.81;}
                if (skillmultiplier == "advanced") {
                    skill = 2.63;}
                if (skillmultiplier == "expert") {
                    skill = 3.23;}
            });
        }
        //Server Support Specialist multipliers
        if (jobname == "serversup"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.39;}
                if (skillmultiplier == "advanced") {
                    skill = 1.78;}
                if (skillmultiplier == "expert") {
                    skill = 2.87;}
            });
        }
        //Software Platform Management Specialist multipliers
        if (jobname == "softwaremgmt"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.16;}
                if (skillmultiplier == "advanced") {
                    skill = 1.32;}
                if (skillmultiplier == "expert") {
                    skill = 1.63;}
            });
        }
        //Software Specialist multipliers
        if (jobname == "softwarespec"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.03;}
                if (skillmultiplier == "advanced") {
                    skill = 1.07;}
                if (skillmultiplier == "expert") {
                    skill = 1.14;}
            });
        }
        //System Database Admin multipliers
        if (jobname == "databaseadmin"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.05;}
                if (skillmultiplier == "advanced") {
                    skill = 1.1;}
                if (skillmultiplier == "expert") {
                    skill = 1.17;}
            });
        }
        //Systems Administrator multipliers
        if (jobname == "sysadmin"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.59;}
                if (skillmultiplier == "advanced") {
                    skill = 2.17;}
                if (skillmultiplier == "expert") {
                    skill = 3.96;}
            });
        }
        //Systems Management Specialist multipliers
        if (jobname == "sysmgmt"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.36;}
                if (skillmultiplier == "advanced") {
                    skill = 1.71;}
                if (skillmultiplier == "expert") {
                    skill = 2.71;}
            });
        }
        //Systems Programmer multipliers
        if (jobname == "sysprog"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.06;}
                if (skillmultiplier == "advanced") {
                    skill = 1.12;}
                if (skillmultiplier == "expert") {
                    skill = 1.27;}
            });
        }
        //Technical Solution Architect multipliers
        if (jobname == "techarchitect"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.98;}
                if (skillmultiplier == "advanced") {
                    skill = 2.96;}
                if (skillmultiplier == "expert") {
                    skill = 4.71;}
            });
        }
        //Technical Team Leader multipliers
        if (jobname == "techteamleader"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.1;}
                if (skillmultiplier == "advanced") {
                    skill = 1.2;}
                if (skillmultiplier == "expert") {
                    skill = 1.69;}
            });
        }
        //Test Architect multipliers
        if (jobname == "testarc"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.07;}
                if (skillmultiplier == "advanced") {
                    skill = 1.15;}
                if (skillmultiplier == "expert") {
                    skill = 1.4;}
            });
        }
        //Test Specialist multipliers
        if (jobname == "testsp"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.39;}
                if (skillmultiplier == "advanced") {
                    skill = 1.78;}
                if (skillmultiplier == "expert") {
                    skill = 4.07;}
            });
        }
        //Transition Manager multipliers
        if (jobname == "transmanager"){
            $(".skill").click(function() {
                skillmultiplier = $(this).attr("id");
                if (skillmultiplier == "novice") {
                    skill = 1;}
                if (skillmultiplier == "intermediate") {
                    skill = 1.15;}
                if (skillmultiplier == "advanced") {
                    skill = 1.31;}
                if (skillmultiplier == "expert") {
                    skill = 1.93;}
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

