// Add the indices here

var dimension_mode_index = '1';
var dimension_platform_index = '2';
var dimension_browser_index = '3';
var dimension_os_index = '4';


// You don't need to edit anything beyond this point

if ( operaDetect.isOpera ) {
	if ( dimension_mode_index ) {
		dimension_mode_index = 'dimension' + dimension_mode_index;
		ga('set', dimension_mode_index, operaDetect.results.mode);
	}
	if ( dimension_platform_index ) {
		dimension_platform_index = 'dimension' + dimension_platform_index;
		ga('set', dimension_platform_index, operaDetect.results.platform);
	}
	if ( dimension_browser_index ) {
		dimension_browser_index = 'dimension' + dimension_browser_index;
		ga('set', dimension_browser_index, operaDetect.results.browser);
	}
	if ( dimension_os_index ) {
		dimension_os_index = 'dimension' + dimension_os_index;
		ga('set', dimension_os_index, operaDetect.results.OS);
	}
} 

// Send pageview
ga('send', 'pageview');