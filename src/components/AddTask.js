import { useState } from "react"

const AddTask = ({ onAddProp }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitFun = (e) => {
        e.preventDefault() // so that it don't accidently submit to a page.

        if(!text){
            alert("Please Add a Task Heading")
            return
        }

        // calls the function that has been passed as prop
        // sends the 3 values as a object , since our task is a object of these 3 values.
        onAddProp( {text, day, reminder} )

        // to clear the form from input values,
        setText('')
        setDay('')
        setReminder(false)
    }

  
    return (
        <form className='add-form' onSubmit={onSubmitFun}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={ (e) => setText(e.target.value) }
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text" 
                    placeholder="Add Day & Time"
                    value={day} 
                    onChange={ (e) => setDay(e.target.value) }
                />
            </div>
            <div className="form-control form-control-check">
                <label> Set Reminder</label>
                <input 
                    type="checkbox" 
                    checked={reminder}
                    value={reminder} 
                    onChange={ (e) => setReminder(e.currentTarget.checked) }
                />
            </div>
            <input type="submit" value="save-task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
