var elementsToShowIfIsOpera = document.getElementsByClassName('isOpera');
var elementsToShowIfIsNotOpera = document.getElementsByClassName('notOpera');

document.getElementById('userAgentString').innerHTML = navigator.userAgent;

if ( operaDetect.isOpera ) {

	for ( var i = 0; i < elementsToShowIfIsOpera.length; i++ ) {
		elementsToShowIfIsOpera[i].style.display = "block";
	}

	var sampleOperaDetectObj = document.getElementById('sampleOperaDetectObj');
	sampleOperaDetectObj.innerHTML = JSON.stringify(operaDetect, null, 4);


} else {

	for ( var i = 0; i < elementsToShowIfIsNotOpera.length; i++ ) {
		elementsToShowIfIsNotOpera[i].style.display = "block";
	}
}



