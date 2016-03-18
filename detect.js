

// Check if current browser is Opera
var isOpera = window.opera | window.opr | ( navigator.userAgent.indexOf(' OPR/') > -1 ) | ( navigator.userAgent.indexOf(' Coast/') > -1 ) | ( navigator.userAgent.indexOf(' OPiOS/') > -1 );



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


var operaDetect = {};

operaDetect.isOpera = isOpera;

if ( isOpera ) {

	operaDetect.results = new Object;


	/* Platform */
	if ( (navigator.userAgent.indexOf('Mobile') > -1) | (navigator.userAgent.indexOf('Opera Mini/') > -1) ) {
		operaDetect.results.platform = "Mobile/Tablet";
	} else {
		operaDetect.results.platform = "Desktop";
	}


	/* OS */

	if ( (navigator.userAgent.indexOf('Android') > -1) ) {
		operaDetect.results.OS = "Android";
	} else if ( (navigator.userAgent.indexOf('Coast/') > -1) | (navigator.userAgent.indexOf('iPad') > -1) | (navigator.userAgent.indexOf('iPhone') > -1) ) {
		operaDetect.results.OS = "iOS";
	} else if ( (navigator.userAgent.indexOf('OS X') > -1) ) {
		operaDetect.results.OS = "OSX";
	} else {
		operaDetect.results.OS = "Unknown";
	}



	/* Browser */

	if ( (navigator.userAgent.indexOf('OPiOS/') > -1) | 

		 (navigator.userAgent.indexOf('Opera Mini/') > -1) |

		 (navigator.userAgent.indexOf('OPR/15') > -1 && navigator.userAgent.indexOf('Mobile') > -1)  ) {

		operaDetect.results.browser = "Opera Mini";

	} else if ( (navigator.userAgent.indexOf('OPR/') > -1 && navigator.userAgent.indexOf('Mobile') > -1) ) {

		operaDetect.results.browser = "Opera Mobile";

	} else if ( (navigator.userAgent.indexOf('Coast/') > -1) ) {

		operaDetect.results.browser = "Opera Coast";

	} else if ( (navigator.userAgent.indexOf('OPR/') > -1) ) {

		operaDetect.results.browser = "Opera Desktop";
	} else {
		operaDetect.results.browser = "Unknown";
	}



	/* Mode */
	if ( (navigator.userAgent.indexOf('Presto/') > -1) && (navigator.userAgent.indexOf('Opera Mini/') > -1) ) {

		operaDetect.results.mode = "Extreme Savings";
	} else {
		operaDetect.results.mode = "High/Normal Savings";
	}




} else {

	operaDetect.results = false;
}



console.log(operaDetect);


// operaDetect.results = {
// 	browser:
// 	device:
// 	mode:
// }