import { ToDo } from "../../../models/todo-item"
import './TodoListItem.scss'


export const TodoListItem = (
  props: { todoItem: ToDo,  updateToDo: Function, deleteToDo: Function }
) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.todoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button 
        className="btn-trash"
        onClick={()=> {props.deleteToDo(props.todoItem)}}
        ></button>
        <button 
        className={props.todoItem.isDone ? 'btn-check' : 'btn-uncheck'}
        onClick={()=> {props.updateToDo(props.todoItem)}}
        ></button>
      </div>
    </li>
  )
}