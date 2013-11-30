#pragma strict

function Start ()
{



}//end start


var matArray : Material[];
 
private var index : int;

 //from http://answers.unity3d.com/questions/242983/change-materialstextures-on-mouse-click.html
function  OnMouseDown()
{
 //Debug.Log("Holding");

   index++;
 
   index = index % matArray.Length;
 
   renderer.material = matArray[index];
}//from Mouse click
    
function OnMouseUp ()
 
{
// Debug.Log("Not Holding");
   index++;
 
   index = index % matArray.Length;
 
   renderer.material = matArray[index];
 
}//from Mouse Release








/*
function Update() {
		if(Input.GetMouseButton(0))
			Debug.Log("Pressed left click.");
		if(Input.GetMouseButton(1))
			Debug.Log("Pressed right click.");
		if(Input.GetMouseButton(2))
			Debug.Log("Pressed middle click.");
	}//end update
	
	*///from http://answers.unity3d.com/questions/164607/holding-objects-when-mouse-button-is-pressed-dropp.html
	
