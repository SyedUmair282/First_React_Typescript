import React, { FC } from 'react'
import { ITodo } from '../interfaces';


interface Props{
    index:number,
    task:ITodo,
    deleteTodo(key:number):void
}

const Tasks:FC<Props> = ({index,task,deleteTodo}:Props) => {
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <p>Task : {task.task}&nbsp;&nbsp;&nbsp;Due : {task.due}</p>  
      <button onClick={()=>deleteTodo(index)}>Del</button>
    </div>
  )
}

export default Tasks;