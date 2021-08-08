function keepTheClockMove()
{
	var n = new Date();

	document.getElementById("timePanel").innerHTML = (n.getHours()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + (n.getMinutes()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	keepTheBackgroundChanges();

	setTimeout(keepTheClockMove, 1000);
}

function keepTheBackgroundChanges()
{
	var currentHour = new Date().getHours();

	if(currentHour >= 6 && currentHour <= 16)
	{
		document.getElementById('Body').className = "Body1";
		document.getElementById('container').className = "Container1";
		document.getElementById('timePanel').className = "TimePanel1";
	}
	else{
		document.getElementById('Body').className = "Body";
		document.getElementById('container').className = "Container";
		document.getElementById('timePanel').className = "TimePanel";
	}
}
