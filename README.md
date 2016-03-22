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

You can get the detection script from this repository, it's `opera-detect.min.js` or `opera-detect.js`.



## Analytics


### Step 1 — Setup 4 Custom Dimensions

To create a custom dimension go to **Admin > Property > Custom Definitions > Custom Dimensions > + New Custom Dimension**.

Setup 4 Custom Dimensions with a Scope of Hit.

![Setting up Custom Dimensions on Google Analytics](http://detect.operamini.tips/img/custom-dimensions.png)

Take note of the **Index** value for each of the dimensions.


### Step 2 — Add the Detection Script 

Add the `opera-detect.min.js` file just before the Google Analytics script.

```
<script src="js/opera-detect.min.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', '[property-reference]', 'auto');
  ga('send', 'pageview');
</script>
```



### Step 3 — Modify Google Analytics Script

Above the sending of the pageview, but below the creating of the Google Analytics reference, set the four custom dimensions to be equal to the results from the `opera-detect.min.js` script (if the current browser is Opera).

Make sure the dimension numbers correspond to the dimension index from the previous step.

```
<script src="js/opera-detect.min.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', '[property-reference]', 'auto');

  if ( operaDetect.isOpera ) {
    ga('set', 'dimension1', operaDetect.results.mode);
    ga('set', 'dimension2', operaDetect.results.platform);
    ga('set', 'dimension3', operaDetect.results.browser);
    ga('set', 'dimension4', operaDetect.results.OS);
  }

  ga('send', 'pageview');
</script>
```


### Step 4 - Setup Custom Dashboard

You may want to setup a custom dashboard specifically for the Opera analytics. Here is an example of a custom dashboard you can do - 

![Google Analytics Dashabord](http://detect.operamini.tips/img/ga-dashboard.png)

At the very least, you may want to have four widgets in this dashboard - 

1. Page Views by Mode
1. Page Views by Browser
1. Page Views by Operating System
1. Page Views by Platform

Example setup of a widget - 

![Google Analytics Widget Config](http://detect.operamini.tips/img/ga-widget.png)


&nbsp;

Done! If you have any questions, tweet me at [@operaminitips](http://twitter.com/operaminitips) or [@ireaderinokun](http://twitter.com/ireaderinokun)



