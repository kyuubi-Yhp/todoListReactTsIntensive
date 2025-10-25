import { ToDo } from "../../models/todo-item"
import classes from './listItem.module.scss'



export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <a className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} href={`/app/list/${todo.id}`} target="_blank">{todo.text}</a>
  )
}