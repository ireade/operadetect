// Setup operaDetect object
var operaDetect = new Object;

// Check if current browser is Opera
operaDetect.isOpera = !!window.opera |
					  !!window.opr | 
					  ( navigator.userAgent.indexOf(' OPR/') > -1 ) |
					  ( navigator.userAgent.indexOf(' Coast/') > -1 ) |
					  ( navigator.userAgent.indexOf(' OPiOS/') > -1 );


// IF CURRENT BROWSER IS AN OPERA BROWSER
if ( operaDetect.isOpera ) {

	operaDetect.results = new Object;


	/* Platform */
	if ( (navigator.userAgent.indexOf('Mobile') > -1) |
		 (navigator.userAgent.indexOf('Opera Mini/') > -1) ) {

		operaDetect.results.platform = "Mobile/Tablet";

	} else if ( navigator.userAgent.indexOf('OMI/') > -1 ) {

		operaDetect.results.platform = "TV";

	} else {

		operaDetect.results.platform = "Desktop";

	}


	/* OS */
	if ( navigator.userAgent.indexOf('Android') > -1 ) {

		operaDetect.results.OS = "Android";

	} else if ( (navigator.userAgent.indexOf('Coast/') > -1) |
		 		(navigator.userAgent.indexOf('iPad') > -1) |
		 		(navigator.userAgent.indexOf('iPhone') > -1) ) {

		operaDetect.results.OS = "iOS";

	} else if ( (navigator.userAgent.indexOf('OS X') > -1) ) {

		operaDetect.results.OS = "OSX";

	} else if ( (navigator.userAgent.indexOf('Windows') > -1) ) {

		operaDetect.results.OS = "Windows";

	} else {

		operaDetect.results.OS = "Other";

	}


	/* Browser */
	if ( (navigator.userAgent.indexOf('OPiOS/') > -1) |
		 (navigator.userAgent.indexOf('Opera Mini/') > -1) |
		 (navigator.userAgent.indexOf('OPR/15') > -1 && navigator.userAgent.indexOf('Mobile') > -1)  ) {

		operaDetect.results.browser = "Opera Mini";

	} else if ( navigator.userAgent.indexOf('OPR/') > -1 &&
				navigator.userAgent.indexOf('Mobile') > -1 ) {

		operaDetect.results.browser = "Opera Mobile";

	} else if ( (navigator.userAgent.indexOf('Coast/') > -1) ) {

		operaDetect.results.browser = "Opera Coast";

	} else if ( (navigator.userAgent.indexOf('OPR/') > -1) ) {

		operaDetect.results.browser = "Opera Desktop";

	} else {
		operaDetect.results.browser = "Unknown";
	}


	/* Mode */
	if ( (navigator.userAgent.indexOf('Presto/') > -1) &&
		 (navigator.userAgent.indexOf('Opera Mini/') > -1) ) {

		operaDetect.results.mode = "Extreme Savings";
		operaDetect.isExtremeMode = 1;

	} else {

		operaDetect.results.mode = "High/Normal Savings";
		operaDetect.isExtremeMode = 0;

	}


} else {

	// IF CURRENT BROWSER IS NOT OPERA BROWSER
	operaDetect.results = 0;
	operaDetect.isExtremeMode = 0;
}
