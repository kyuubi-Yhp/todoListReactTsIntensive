import { ToDo } from "../../models/todo-item"
import { TodoListItem } from "./todolistitem/TodoListItem"

export const TodoList = () => {
  const todo1: ToDo = {
    id: 0,
    text: '',
    isDone: false
  }


  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <li className="todo-list-item__wrapper">
          <span>Первая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-check"></button>
          </div>
        </li>
      </ul>
      <ul className="todo-list completed">
        <TodoListItem todoItem={todo1} 
          />
      </ul>
    </div>
  )
}