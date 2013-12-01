#pragma strict


function Start () {

}

    
function Update () 
{

	// Detects clicks from the mouse and prints a message
	// depending on the click detected.

if(Input.GetMouseButtonDown(0))
			{
var hit: RaycastHit;				

	// Construct a ray from the current touch coordinates
			var ray1 = Camera.main.ScreenPointToRay (Input.mousePosition);
			if (Physics.Raycast (ray1,hit)) 
				{
				//If true, this confirms the touch.
			
						if (hit.collider.tag == "DestroyOnClick" )		// Destroy if tagged as Destroyable //Tag is a propery of Collider, you're getting Collider as a VARIABLE of RaycastHit - it's the collider that WAS hit. 
								{								Destroy (hit.collider.gameObject);
								}
								
						if (hit.collider.tag == "RestartLevel" )		// Destroy if tagged as Destroyable //Tag is a propery of Collider, you're getting Collider as a VARIABLE of RaycastHit - it's the collider that WAS hit. 
								{		
								Application.LoadLevel(0);						
								}
								
								
								
						if (hit.collider.tag == "ui_Button" )		// Destroy if tagged as Destroyable //Tag is a propery of Collider, you're getting Collider as a VARIABLE of RaycastHit - it's the collider that WAS hit. 
								{		
								hit.collider.SendMessage("touchAction")	;					
								}
								
								
								
				}
				
				
				
				
			}
			
	
			
		
}//Update