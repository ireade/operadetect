// Check if current browser is Opera
var isOpera = window.opera | window.opr | ( navigator.userAgent.indexOf(' OPR/') > -1 );

// Check if the Opera browser is Opera Mini or Opera Mobile in regular mode (called High Savings Mode)
var isOperaHigh = (navigator.userAgent.indexOf('OPR/') > -1) && (navigator.userAgent.indexOf('Mobile') > -1) && (navigator.userAgent.indexOf('Presto/') < 0);

// Check if the Opera browser is Opera Mini in Extreme Savings Mode
var isOperaExtreme = (navigator.userAgent.indexOf('Opera Mini/') > -1) && (navigator.userAgent.indexOf('Presto/') > -1);



// REPORTING

var operaMode;

if ( isOperaHigh ) {
	operaMode = "High Savings Mode (Regular)";

	ga('send', 'pageview', {
	  'dimension1': operaMode
	});
}
else if ( isOperaExtreme ) {
	operaMode = "Extreme Savings Mode";

	ga('send', 'pageview', {
	  'dimension1': operaMode
	});
}
else {
	operaMode = "Not Opera Mobile/Mini";
}