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



var dimension_mode = '1';
var dimension_platform = '2';
var dimension_browser = '3';
var dimension_os = '4';



// GA REPORTING

if ( operaDetect.isOpera ) {


	dimension_mode = 'dimension' + dimension_mode;
	dimension_platform = 'dimension' + dimension_platform;
	dimension_browser = 'dimension' + dimension_browser;
	dimension_os = 'dimension' + dimension_os;

	ga('set', dimension_mode, operaDetect.results.mode);
	ga('set', dimension_platform, operaDetect.results.platform);
	ga('set', dimension_browser, operaDetect.results.browser);
	ga('set', dimension_os, operaDetect.results.OS);

} 
ga('send', 'pageview');



