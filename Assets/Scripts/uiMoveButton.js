#pragma strict

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

player01.SendMessage(moveDirection);


}//from Mouse click
    
function OnMouseUp ()
 
{
// Debug.Log("move Not Holding");

 
}//from Mouse Release




