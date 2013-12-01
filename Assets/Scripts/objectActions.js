#pragma strict

//control variables
var isMoving : boolean;
var isAttacking : boolean;
var isBlocking : boolean;



//movement variables
public var movementSpeed : int = 3;

var movementDirection : Vector3 = Vector3 (0, 0, 0);

// materials for the player character

public var baseMaterial : Material;
public var moveMaterial : Material;
public var attackMaterial : Material;
public var blockMaterial : Material;



function Start () {  }//end Start

function Update () {
//function FixedUpdate () {

// continuously move this object in the directions we receive.
// These are set by button clicks.

	rigidbody.MovePosition(rigidbody.position + movementDirection * Time.deltaTime);
//from http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.MovePosition.html


for (var i = 0; i < Input.touchCount; ++i) 
	{
		var touch = Input.GetTouch(i);
		Debug.Log(touch);
		var transFactor = 0.1*i;
	}
	
if (!isMoving && !isAttacking && !isBlocking) {
gameObject.renderer.material.color = Color(0.5, 0.5, 0.5, transFactor);
}


}//end update

//Stop Moving function

function stopMoving()
{ 
	movementDirection = Vector3 (0, 0, 0);
	renderer.material = baseMaterial;

		isMoving = false;



} //set my movement to 0
//our UI buttons send this when the mouse is released.

function stopAttacking()
{		isAttacking = false; 	renderer.material = baseMaterial;}

function stopBlocking()
{		isBlocking = false; 	renderer.material = baseMaterial;}
	
	//Movement Functions
	function north ()
	{
		if (!isAttacking && !isBlocking) //only move when not attacking or blocking
		{
			movementDirection = Vector3 (0, 0, movementSpeed);
			renderer.material = moveMaterial;
			isMoving = true;
				// Debug.Log("Moving North");
	 
		}//end double check
		
		if (isAttacking && !isBlocking) //only move when not attacking or blocking
		{
		gameObject.renderer.material.color = Color(1, 0.5, 1);
		    Debug.Log("Attack North");
		}
				
		if (!isAttacking && isBlocking) //only move when not attacking or blocking
		{
				gameObject.renderer.material.color = Color(0.75, 1, 1);
		    Debug.Log("Block North");
		}
		

	}//end function
	
	
	
	function west ()
	{
			if (!isAttacking && !isBlocking) //only move when not attacking or blocking
		{
			movementDirection = Vector3 (-movementSpeed, 0, 0);
			renderer.material = moveMaterial;
			isMoving = true;
		}//end double check
	//	Debug.Log("Moving West");
			if (isAttacking && !isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Attack West");
		}
				
		if (!isAttacking && isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Block West");
		}
		
	
	
	
	}//end function
	
	
	
	function east ()
	{
			if (!isAttacking && !isBlocking) //only move when not attacking or blocking
		{
			movementDirection = Vector3 (movementSpeed, 0, 0);
			renderer.material = moveMaterial;
			isMoving = true;
		}//end double check
	//	Debug.Log("Moving East");
			if (isAttacking && !isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Attack East");
		}
				
		if (!isAttacking && isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Block East");
		}
		
	
	
	
	}//end function
	
	
	
	function south ()
	{
			if (!isAttacking && !isBlocking) //only move when not attacking or blocking
		{
			movementDirection = Vector3 (0, 0, -movementSpeed);
			renderer.material = moveMaterial;
			isMoving = true;	
	//	Debug.Log("Moving South");
		}//end double check
		
		
		
		if (isAttacking && !isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Attack South");
		}
				
		if (!isAttacking && isBlocking) //only move when not attacking or blocking
		{
		    Debug.Log("Block South");
		}	
	}//end function


//color actions

function attack ()
{ 
isAttacking = true;
renderer.material = attackMaterial;
}//end function



function block ()
{ 
isBlocking = true;
renderer.material = blockMaterial;
}//end function