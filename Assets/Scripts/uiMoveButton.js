﻿#pragma strict

public var moveDirection : String;
public var player01 : GameObject;

function Start ()
{

player01 = gameObject.Find("player01");


}//end start


 //from http://answers.unity3d.com/questions/242983/change-materialstextures-on-mouse-click.html
function  OnMouseDown()
{

//Debug.Log(moveDirection);


player01.SendMessage(moveDirection); //send the command to move. Direction is designated in the Explorer via the public variable.


}//from Mouse click
    
function OnMouseUp ()
 
{

player01.SendMessage("stopMoving"); //stop moving when the player releases the button.

// Debug.Log("move Not Holding");

 
}//from Mouse Release




