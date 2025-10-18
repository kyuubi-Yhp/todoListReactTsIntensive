import { ToDo } from "../../../models/todo-item"



export const TodoListItem = (
  props: { todoItem: ToDo }
) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.todoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button className="btn-uncheck"></button>
      </div>
    </li>
  )
}