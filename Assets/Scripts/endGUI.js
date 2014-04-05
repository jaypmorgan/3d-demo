#pragma strict

var choice : int = 0;
var enableGui : boolean = true;
var enableAnswerCorrect : boolean;
var enableAnswerIncorrect : boolean;

// button textures
var button1 : Texture;
var button2 : Texture;
var button3 : Texture;
var button4 : Texture;

// resultant textures
var textCorrect : Texture;
var textIncorrect : Texture;

function Start () {
	Screen.lockCursor = false;
}

function Update () {
	switch(choice) { 
		case 1: incorrect(); break;
		case 2: correct(); break;
		case 3: incorrect(); break;
		case 4: incorrect(); break;
	}
}

function OnGUI() { 
	// styling to remove margins and paddings on button
	var tStyle:GUIStyle = GUIStyle(GUI.skin.button);
	tStyle.padding = RectOffset();
	tStyle.contentOffset = Vector2();
	
	if(enableGui) { 
		if(GUI.Button(Rect(Screen.width/4 - 150,Screen.height-100,150,75),button1,tStyle)) { 
			choice = 1; 
		} 
		
		if(GUI.Button(Rect(Screen.width/2 - 200,Screen.height-100,150,75),button2,tStyle)) { 
			choice = 2; 
		} 
		
		if(GUI.Button(Rect(Screen.width/2 + 50,Screen.height-100,150,75),button3,tStyle)) { 
			choice = 3; 
		} 
		
		if(GUI.Button(Rect(Screen.width - 375,Screen.height-100,150,75),button4,tStyle)) { 
			choice = 4; 
		} 
	}
	
	if(enableAnswerCorrect) { 
		guiTexture.texture = textCorrect;
	} else if (enableAnswerIncorrect) { 
		guiTexture.texture = textIncorrect;
	}
}

function correct() { 
	enableAnswerCorrect = true;
	enableGui = false;
}

function incorrect() { 
	enableAnswerIncorrect = true;
	enableGui = false; 
}