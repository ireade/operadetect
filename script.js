var foo = document.getElementById('foo');
var bar = document.getElementById('bar');

//console.log(navigator);


if ( isOpera ) {
	foo.innerHTML = "Is Opera - " + operaMode;
} else {
	foo.innerHTML = "Not Opera";
}


bar.innerHTML = "navigator.userAgent: "+ navigator.userAgent;