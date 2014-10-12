function countdown(month, day, year) {
	var eventDate;
	var Umm = document.getElementById(month);
	var Udd = document.getElementById(day);
	var Uyy = document.getElementById(year);
	eventDate = Umm + "/" + Udd + "/" + Uyy;
	var today = new Date();
	var mm = today.getDate();
	var dd = today.getMonth();
	var yy = today.getFullYear();
	today = mm + "/" + dd + "/" + yy;

	document.write(eventDate);
	document.write(today);

	if(s < 0 && m > 0) {
		s = 59;
		m--;
	} else {
		s = 0;
	}

	if(m < 0 && h > 0) {
		m = 59;
		h--;
	} else {
		m = 0;
	}

	if(h < 0 && d > 0) {
		h = 59;
		d--;
	} else {
		h = 0;
	}

	if(d > 0) {
		d = 0;
	}
}