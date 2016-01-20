var arrayOfOperands = [];
$("document").ready(function() {
	//Click events for numbers
	$("#one-btn").click(function() { appendNumber("1"); });
	$("#two-btn").click(function() { appendNumber("2"); });
	$("#three-btn").click(function() { appendNumber("3"); });
	$("#four-btn").click(function() { appendNumber("4"); });
	$("#five-btn").click(function() { appendNumber("5"); });
	$("#six-btn").click(function() { appendNumber("6"); });
	$("#seven-btn").click(function() { appendNumber("7"); });
	$("#eight-btn").click(function() { appendNumber("8"); });
	$("#nine-btn").click(function() { appendNumber("9"); });
	$("#plus-btn").click(function() { appendNumber("+"); });
	$("#minus-btn").click(function() { appendNumber("-"); });
	$("#multiply-btn").click(function() { appendNumber("*"); });
	$("#divide-btn").click(function() { appendNumber("/"); });
	$("#equals-btn").click(function() { appendNumber("="); });

});

function appendNumber(operand) {
	var oldString = $("#number-screen").text();
	$("#number-screen").text(oldString + operand);
	arrayOfOperands.push(operand);
	console.log(arrayOfOperands);
}
