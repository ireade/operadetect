# Opera Detect

> Better detection and analytics for Opera Browsers.


## About

The Opera Mini web browser, used by up to 70% of users in developing countries like Nigeria, has two modes - A High/Normal Savings Mode and an Extreme Savings Mode. When users are on the Extreme Savings Mode, the browser foregoes a lot of crucial development features we typically take for granted ([read more here](http://operamini.tips/#/about)).

Previously, there has been now way to detect if a user is on Extreme or High Savings Mode, until now. Opera Detect is a tiny script that allows you to access information about the Opera Browser a user is on, including which savings mode they are using.


## Detection

The script returns an object, `operaDetect`, with some information about the current Opera Browser. For example, the following will be returned when viewing from an Opera Mini Browser with Extreme Savings Mode on a Nexus 5.


```
var operaDetect = {
  isOpera: 1
  isExtremeMode: 1
  results: {
    mode: "Extreme Savings"
    platform: "Mobile/Tablet"
    browser: "Opera Mini"
    OS: "Android"
  }
}
```



## Analytics


### Step 1 — Setup 4 Custom Dimensions

To create a custom dimension go to **Admin > Property > Custom Definitions > Custom Dimensions > + New Custom Dimension**.

Setup 4 Custom Dimensions with a Scope of Hit.

![](http://detect.operamini.tips/img/custom-dimensions.png)

Take note of the **Index** value for each of the dimensions.




### Step 2 — Include Modified GA Script

Remove or comment-out the line that sends the pageview as this will be sent after the custom dimensions are set. 

```
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', '[property-reference]', 'auto');
  // ga('send', 'pageview');
</script>
```


### Step 3 - Create `opera-analytics.js` file

Copy the code below into the `opera-analytics.js` file. Update the first 4 lines with the index for the relevant dimensions. 

```
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
```


### Step 4 - Include Script Files in the Correct Order

Make sure the three scripts are in the following order -

```
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-60256750-12', 'auto');
</script>
<script src="opera-detect.min.js"></script>
<script src="opera-analytics.js"></script>
```



