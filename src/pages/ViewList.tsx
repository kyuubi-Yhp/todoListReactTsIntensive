import { ListItem } from "../components/listItem/ListItem"
import { ToDo } from "../models/todo-item"

interface componentProps {
  todos: ToDo[]
}

export const ViewList = ({ todos }: componentProps) => {
  return (
    <div className="container">
      {
        todos.map((todo: ToDo) => {
          return (<ListItem todo={todo} key={todo.id} />)
        })
      }
    </div>
  )
}