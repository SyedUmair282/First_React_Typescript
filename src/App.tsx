import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import Tasks from "./components/tasks";
import {ITodo} from "./interfaces";

//fC is a tells that App is a functional component
const App: FC = () => {

  //todo state must have string value
  const [todo,setTodo]=useState<string>("")
  //deadline state must have integer
  const [deadline,setDeadline]=useState<number>(0)
  //todos must be an array of ITodo interface if remove [] brackets then 
  //insert object in []state otherwise give error this only in error
  const [todos,setTodos]=useState<ITodo[]>([])

  //void is return type of function and changeEvent is this function is called when Html input element change
  const handlechange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==="todo"){
      setTodo(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTodo=():void=>{
    setTodos([...todos,{task:todo,due:deadline}])
    setTodo("");
    setDeadline(0)
  }
  const deletetodo=(index:number):void=>{
    console.log("delete",index);
    todos.splice(index,1);
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
          <input type="text" placeholder="Todo..." name="todo" onChange={handlechange} maxLength={15} value={todo} />
          <input type="number" placeholder="Deadline..." name="deadline" onChange={handlechange} value={deadline} />
          <button onClick={addTodo}>Add</button>
      </div>
      <div style={{border:"1px solid black",width:"22.3%",margin:"0 auto"}}>
        {todos.map((task:ITodo,key:number)=>{
          return(
            <Tasks key={key} task={task} deleteTodo={deletetodo} index={key}/>
          )
        })}
      </div>
    </div>
  );
};

export default App;
