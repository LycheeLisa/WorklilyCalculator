var job_value = undefined;
var time_value = undefined;
var skill_index = -1;
var skillList = undefined;

$(document).ready(function() {
	var button1 = $("#menu1");
	var ul1 = button1.next();
	ul1.on('click', 'li', function() {
		button1.text($(this).text());
		skillList = $(this).find('a').attr('data-level');
		job_value = parseFloat($(this).find('a').attr('value'));
		update();
	});
	
	var button2 = $("#menu2");
	var ul2 = button2.next();
	ul2.on('click', 'li', function() {
		button2.text($(this).text());
		skill_index = parseInt($(this).find('a').attr("value"), 10);
		update();
	});
	
	var button3 = $("#menu3");
	var ul3 = button3.next();
	ul3.on('click', 'li', function() {
		button3.text($(this).text());
		time_value = parseFloat($(this).find('a').attr('value'));
		update();
	});
});

function update() {
	if (job_value && time_value && skill_index>=0 && skillList) {
		var skill_value = parseFloat(skillList.split(',')[skill_index]);
		var finalValue = (time_value * job_value * skill_value).toFixed(0);
		 $("#total").html("$" + finalValue);
	}
}