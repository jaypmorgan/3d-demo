#pragma strict

var target : Transform;
var minDistance : int = 0;
var moveSpeed : int = 4;
var gameover : boolean;

function Start () {

}

function Update () {
	transform.LookAt(target);
	
	if(Vector3.Distance(transform.position,target.position) >= minDistance) { 
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
	
	if(gameover) { 
		Application.LoadLevel("gameOver");
	}
}

function OnTriggerEnter(other : Collider) { 
	if(other.gameObject.tag == "Player") { 
		gameover = true;
	}
}

