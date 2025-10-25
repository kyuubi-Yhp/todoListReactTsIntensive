import { ToDo } from "../../models/todo-item"
import { TodoListItem } from "./todolistitem/TodoListItem"
import './TodoList.scss'

export const TodoList = (props: {
  todos: ToDo[],
  deleteToDo: Function,
  updateToDo: Function
},
) => {

  const checkedList = () => {
    return (
      props.todos
        .filter((item) => !item.isDone)
        .map((item, idx) => {
          return (
            <TodoListItem todoItem={item} key={idx}
              updateToDo={props.updateToDo}
              deleteToDo={props.deleteToDo}
            />
          )
        })
    )
  }
  const unCheckedList = () => {
    return (
      props.todos
        .filter((item) => item.isDone)
        .map((item, idx) => {
          return (
            <TodoListItem todoItem={item} key={idx}
              updateToDo={props.updateToDo}
              deleteToDo={props.deleteToDo}
            />
          )
        })
    )
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
    </div>
  )
}