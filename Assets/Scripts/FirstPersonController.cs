using UnityEngine;
using System.Collections;


public class FirstPersonController : MonoBehaviour {

	// character speeds
	public float movementSpeed = 1000.0f;
	public float lookSpeed = 3.0f;

	// character ranges
	public float verticalRotation = 0;
	public float lookRange = 60.0f;
	
	public int numNotes = 0; 

	// Use this for initialization
	void Start () {
		Screen.lockCursor = true;
	}
	
	// Update is called once per frame
	void Update () {
		// Rotation Up and Down
		float rotationYaw = Input.GetAxis ("Mouse X") * lookSpeed;
		transform.Rotate (0, rotationYaw, 0);

		// Rotation Left And Right
		verticalRotation -= Input.GetAxis ("Mouse Y") * lookSpeed;
		verticalRotation = Mathf.Clamp (verticalRotation, -lookRange, lookRange);
		Camera.main.transform.localRotation = Quaternion.Euler(verticalRotation, 0, 0);

		// Movement
		float forwardSpeed = Input.GetAxis ("Vertical") * movementSpeed;
		float sideSpeed = Input.GetAxis ("Horizontal") * movementSpeed;

		Vector3 speed = new Vector3 (sideSpeed, 0, forwardSpeed);
		speed = transform.rotation * speed;

		CharacterController cc = GetComponent<CharacterController> ();

		cc.SimpleMove(speed * Time.deltaTime);

		if (cc.velocity == Vector3.zero) { 
			audio.Play();
		}


	}
}
