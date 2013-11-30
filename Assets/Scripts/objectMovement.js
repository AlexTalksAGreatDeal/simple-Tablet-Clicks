#pragma strict

public var movementSpeed : int = 3;

var movementDirection : Vector3 = Vector3 (0, 0, 0);

function Start () {

}

function Update () {
//function FixedUpdate () {


// continuously move this object in the directions we receive.
// These are set by button clicks.


rigidbody.MovePosition(rigidbody.position + movementDirection * Time.deltaTime);
//from http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.MovePosition.html

}

//Stop Moving function

function stopMoving()
{ movementDirection = Vector3 (0, 0, 0); } //set my movement to 0
//our UI buttons send this when the mouse is released.

//Movement Functions
function north ()
{

movementDirection = Vector3 (0, 0, movementSpeed);

 Debug.Log("Moving North");
 
}//end function



function west ()
{

movementDirection = Vector3 (-movementSpeed, 0, 0);
	Debug.Log("Moving West");
}//end function



function east ()
{

movementDirection = Vector3 (movementSpeed, 0, 0);
	Debug.Log("Moving East");
}//end function



function south ()
{
movementDirection = Vector3 (0, 0, -movementSpeed);
	Debug.Log("Moving South");
}//end function