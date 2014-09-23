window.onload = function(){
	console.log('js.js reporting for duty!');

    var nameInput = document.getElementById('nameInput');

	function addName() {
		var newName = nameInput.value;
		alert('your name is: ' + newName);
	}


}