using TouchScript.Events;
using TouchScript.Gestures;
using UnityEngine;

public class ui_TS_ChangeTextureButton : MonoBehaviour
{
	private void Start()
	{
		if (GetComponent<LongPressGesture>() != null) GetComponent<LongPressGesture>().StateChanged += onPress;
	}
	
	private void onPress(object sender, GestureStateChangeEventArgs gestureStateChangeEventArgs)
	{
		if (gestureStateChangeEventArgs.State == Gesture.GestureState.Recognized)
			GameObject.Find("player01").renderer.material.color = renderer.material.color;
	}
}

//var matArray : Material[]; //original Javascript Var for Material Array


			/*
		Debug.Log("Holding");
		
		index++;
		
		index = index % matArray.Length;
		
		renderer.material = matArray[index];
		*/ //Original Javascript Button Code

