
function handleButton(data) {	
	let sum_progress = 0;
	let progressBar = "";
	$("button").click(function(event) {
	let pressed_button = $(this).val();	
	sum_progress += Number(pressed_button);
	if (sum_progress >= 101) {
		alert("Значение больше 100% и будет обнулено");
		sum_progress = 0;
	}
	else {
		progressBar = String(sum_progress) + "%";
		$("#progressbar").width(progressBar);	
		console.log(progressBar);
	}
});
}

function init() {
	$("#button").click(handleButton(event));
}

$(document).ready(init);