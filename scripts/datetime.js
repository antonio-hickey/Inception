function fetchDate() {
  var str = "";
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var clock = new Date();
	var now = new Date();

	str += months[clock.getMonth()] + " " + now.getDate() + ", " + clock.getFullYear() + " | " + ("0" + now.getHours()).slice(-2) +":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2);
	document.getElementById("datetime").innerHTML = str;
}

