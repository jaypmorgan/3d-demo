#pragma strict

var ShowPaper : boolean;
var noteText : Texture;
var close : boolean;

function Start () {
	guiTexture.enabled = false;
}

function Update () {
	if(ShowPaper) { 
		guiTexture.texture = noteText;
		guiTexture.enabled = true;
	}
	
	if(Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.RightArrow)) { 
		guiTexture.enabled = false;
		ShowPaper = false;
	}

	
}