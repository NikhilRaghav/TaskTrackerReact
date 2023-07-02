import Task from "./Task"
const Tasks = ({ tasksProp, onDeleteProp , onToggleReminder}) => {
	return (
		<>
			{ tasksProp.map( (task) => ( <Task key={task.id} task={task} onDeleteFunc={onDeleteProp} onToggleReminder={onToggleReminder}/> ) ) }
		</>
	)
}

export default Tasks