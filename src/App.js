import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  // this state is used to show/hide the form for adding new task
  const [showAddTask, setShowAddTask] = useState(false)

  // this is hook , used to set values.
	// the parameter inside the useState() is default value
	// state is immutable ,, so we have to re-create using the setTasks.
  // if we want to update the tasks , using setTasks , then , if we need to add new tasks , then ,,
  // setTasks( [ ...tasks, {id:'11',text:'test',day:'hello',reminder:false} ] )
	const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch Data from json-server task. make sure to run the servers in same browser.
  // since we want this fetch to be a global function , we have it here separately , we can also have it inside the 
  // useEffect()
  const fetchTasks = async() => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    console.log(data)
    return data
  }
  
  // Delete Task
  // The method uses the filter() to create a new array that includes all the tasks except for the one with the specified
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    console.log('delete',id)
    setTasks(tasks.filter( (tasks) => tasks.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('toggle Reminder for ',id)
    setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    // The ...syntax is called the spread syntax and is used to copy an object or an array. 
    // In this case, the spread syntax is used to create a new object with all the properties of the original task, 
    // and then update the reminder property.

  }

  // Add Task
  const addTask = (task) => {
    console.log("Adding Task",task)
    
    // to generate a random id
    const id = Math.floor(Math.random() * 10000 ) + 1
    console.log("Generated Id is ", id)

    // Create new task with generated id and passed in task values.
    const newTask = {id , ...task}
    setTasks([...tasks, newTask])
    console.log("Updated the tasks with new task")
  }
  
  return (
    <div className="container">
      <Header 
        title="Task Tracker NR" 
        onAddBtnShow = {() => setShowAddTask(!showAddTask)}
        showAddBtnProp = {showAddTask}
      />
      { showAddTask && <AddTask onAddProp = {addTask}/>}
      { tasks.length > 0 ? (
        <Tasks 
          tasksProp = {tasks} 
          onDeleteProp = {deleteTask} 
          onToggleReminder = {toggleReminder}
        /> 
        ) : ('No Tasks to show')
      }
    </div>
  );
}

export default App;




/* 
https://github.com/bradtraversy/react-crash-2021/blob/master/src/components/Tasks.js
Notes : 
-----------
To pass in props , we simply do like ,,
<Header title="nikhil"/>
-----------------------------------------------------------------------------------------------
if we want to pass numbers , <Header num = {1} /> ,,
------------------------------------------------------------------------------------------------

We can have default props.,,

// default props setting
Header.defaultProps = {
    title: 'Welcome To Task Tracker'
}
------------------------------------------------------------------------------------------------
We can introduce type for these props ,,

1) import PropTypes from 'prop-types'

2) Header.prototype = {
    title : PropTypes.string
}

If we pass number , it will still compile , but will give warning,,
------------------------------------------------------------------------------------------------
We can mandate the presence of a prop by using isRequired.

Header.prototype = {
    title : PropTypes.string.isRequired
}

When no props is passed and no default value is set , it will throw error 
------------------------------------------------------------------------------------------------
CSS :

We can have inline CSS , internal , external css.

Inline CSS : 
   <h1 style={ {color:'red', backgroundColor:'greenyellow'} }>
            {title}
        </h1>

Internal CSS : 
  <h1 style={ headingStyle }>
  
  const headingStyle = {
    color:'red', 
    backgroundColor:'greenyellow'
  }

External CSS : 
  create file , import it  , example ,,,
  index.css, 


------------------------------------------------------------------------------------------------
convert to production build : --> npm run build

this will generate a build folder with assets.

We can use something called "static server" provided by npm --> just a basic http server,

commands to run : 
  npm install -g serve
  serve -s build
  serve -s build -p 8000 ( its for port )

https://create-react-app.dev/docs/deployment/

------------------------------------------------------------------------------------------------
Mock Backend : 

Json Server : https://www.npmjs.com/package/json-server

npm i json-server --> to install locally ,

then modify the script of package.json
"server": "json-server --watch db.json --port 5000"

command to run npm run server.

This will by default create a server , and a db.json file , with prefilled data like 

{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}

Resources
  http://localhost:5000/posts
  http://localhost:5000/comments
  http://localhost:5000/profile

  Home
  http://localhost:5000


------------------------------------------------------------------------------------------------
.
.
------------------------------------------------------------------------------------------------
.
.
.
------------------------------------------------------------------------------------------------
.
.
.
.
.
.
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------

*/