var foo = document.getElementById('foo');
var bar = document.getElementById('bar');


var OS = document.getElementById('OS');
var browser = document.getElementById('browser');
var mode = document.getElementById('mode');
var platform = document.getElementById('platform');

//console.log(navigator);


console.log(operaDetect);



if ( operaDetect.isOpera ) {

	foo.innerHTML = "Is Opera";

	OS.innerHTML = "OS: "+ operaDetect.results.OS;
	browser.innerHTML = "browser: "+ operaDetect.results.browser;
	mode.innerHTML = "mode: "+ operaDetect.results.mode;
	platform.innerHTML = "platform: "+ operaDetect.results.platform;


} else {
	foo.innerHTML = "Not Opera";
}


bar.innerHTML = "navigator.userAgent: "+ navigator.userAgent;




// GA REPORTING

if ( operaDetect.isExtremeMode  ) {

	ga('set', 'dimension1', 'Extreme Savings Mode');

}
else if ( operaDetect.isOpera && !operaDetect.isExtremeMode ) {

	ga('set', 'dimension1', 'High/Normal Savings Mode');
}


ga('send', 'pageview');