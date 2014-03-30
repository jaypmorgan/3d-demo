#pragma strict

var enter : boolean;
var note : Texture;

private var showpaper : ShowPaper;

function Start () {
	showpaper = FindObjectOfType(ShowPaper);
}

function Update () {
	if(enter && Input.GetKeyDown("f")) {
		showpaper.noteText = note;
		showpaper.ShowPaper = true;
		Destroy(gameObject);
	}
	
}

function OnGUI() { 
	if(enter) { 
		GUI.Label(new Rect(Screen.width/2 - 100, Screen.height - 100, 250, 30), "Press push button to pick up note");
	}
}

function OnTriggerEnter(other : Collider) { 
	if(other.gameObject.tag == "Player") { 
		enter = true;
	}
}

function OnTriggerExit(other : Collider) { 
	if(other.gameObject.tag == "Player") { 
		enter = false;
	}
}