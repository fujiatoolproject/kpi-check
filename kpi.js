
var allMenit = document.getElementsByClassName("menit");	// All element with class:menit
var allDetik = document.getElementsByClassName("detik");	// All element with class:detik
var allTotal = document.getElementsByName("total[]");		// All element with name:total[]

// Update innerHTML of Total for current element
function UpdateTotal(element){
	// get index
	var i = element.getAttribute("index");

	// get menit
	var menit = parseInt(allMenit[i].value);
	if(isNaN(menit)) menit = 0;
	// get detik
	var detik = parseInt(allDetik[i].value);
	if(isNaN(detik)) detik = 0;

	// set total
	allTotal[i].innerHTML = menit*60 + detik + '分';
}

