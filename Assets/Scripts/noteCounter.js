#pragma strict

var notes : int = 0;
var abPickup : boolean;
var gameOver : boolean;

function Start () {
}

function Update () {
	if(abPickup && Input.GetKeyDown("f")) { 
		notes++;
		abPickup = false;
	}
	
	if(gameOver == true) { 
		Application.LoadLevel("gameOver");
	}
}

function OnTriggerEnter(other : Collider) { 
	if(other.gameObject.tag == "paper") {
		abPickup = true;
	}
}

function OnTriggerExit(other : Collider) { 
	if(other.gameObject.tag == "paper") { 
		abPickup = false;
	}
}