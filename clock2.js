function keepTheClockMove()
{
	var n = new Date();
	
	document.getElementById("timePanel").innerHTML = (n.getHours()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + (n.getMinutes()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	
	setTimeout(keepTheClockMove, 1000);
}
