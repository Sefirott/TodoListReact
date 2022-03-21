import logo from './logo.svg';
import './App.css';
import React from "react";
import { ArrowRight, ArrowRightCircle, Plus, PlusCircle, Trash } from 'react-bootstrap-icons';



function App() {
const [task, setTask] = React.useState("");
const [arr, setArr] = React.useState([]);      
      
  const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTask = {
              id: new Date().getTime(),
              text: task,
        }
        
        if(task.length == 0) {
              
              return undefined;
        }
        else  {      
        setArr([...arr].concat(newTask));
        setTask("");
        }
  }
  
const deleteTask = (index) => {
      let array = arr;
      array.splice(index, 1);
      setArr([...array]);
}


  return (
    <div className="App">
       <form onSubmit = {handleSubmit}>
       <div className="display" >
             <h3>Task</h3><ArrowRightCircle />
      <input
            className="taskBar"
            type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="todo"
            /> 
  <button type='submit' className="btn btn-primary">
        <PlusCircle />
             </button>       
             </div>
          </form>
                  <div className="display" >
                <button 
      className="btn btn-danger"
      onClick={() => setArr([])}
      >
                   Clear Items
             </button>
                  </div>
          
 {arr.map((task, index) => 
          
          <div  className="display"
               key={task.id} 
                >
                
         <input 
               type="checkbox" 
               className="check form-check-input"
               />

                      <span>{task.text}</span>
         
                <button 
                      className="btn trash" 
        onClick={() => deleteTask(index)}
                      > 
                   <Trash />
                      </button>
                </div>               
                        )}    

    </div>
  );
}

export default App;
