#pragma strict

function Start () {

}

function Update () {

}



var matArray : Material[];
 
private var index : int;
 
function OnMouseUp ()
 
{
 
   index++;
 
   index = index % matArray.Length;
 
   renderer.material = matArray[index];
 
}