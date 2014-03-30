#pragma strict

var flashlight : Light;

function Start () {
	flashlight.enabled = true;
}

function Update () {
	var rn = Random.value;
	
	if(rn <= 0.95) { 
		flashlight.enabled = true;
	} else { 
		flashlight.enabled = false;
	}
}