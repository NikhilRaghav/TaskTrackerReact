// the below is from react-icons , can be installed if not present locally by using 
// npm i react-icons.
import { FaTimes } from 'react-icons/fa'
// the FaTimes is the x icon that can be used for closing/deleting


const Task = ( {task, onDeleteFunc, onToggleReminder} ) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''} `} onDoubleClick={ () => {onToggleReminder(task.id)} }>
        <h3> 
            {task.text} 
            <FaTimes 
                style={ {color: 'red', cursor:'pointer'} } 
                onClick={ () => {onDeleteFunc(task.id)} }
            /> 
        </h3>
        <p> {task.day} </p>
    </div>
  )
}

export default Task


/* 
onDeleteFunc={onDeleteProp} --> this will call the OnDelete function defined in App.js , 
passed as props from App.js -> Tasks.js -> Task.js

Note that the default value is event , 
sample event : 
SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: path, …}altKey: falsebubbles: truebutton: 0buttons: 0cancelable: trueclientX: 614clientY: 158ctrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 3getModifierState: ƒ modifierStateGetter(keyArg)isDefaultPrevented: ƒ functionThatReturnsFalse()isPropagationStopped: ƒ functionThatReturnsFalse()isTrusted: truemetaKey: falsemovementX: 0movementY: 0nativeEvent: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}pageX: 614pageY: 158relatedTarget: nullscreenX: 614screenY: 269shiftKey: falsetarget: pathtimeStamp: 3025954.4type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}_reactName: "onClick"_targetInst: null[[Prototype]]: Object



If we want to pass arguments , then ,,,

onClick = { () => onDeleteFunc(task.id) },, 

we are creating a function and that function calls the deleteFunction with id as argument.

since it is one line function , we dont need to have braces like () => { onDeleteFunc(task.id) }
*/