import { Form } from "../components/form/Form"
import { TodoList } from "../components/todolist/TodoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"


export const TodoListPage = () => {

  const [todos, setTodos] = useState<ToDo[]>([{
    id: 0,
    text: 'one item weweweew',
    isDone: false
  },
  {
    id: 1,
    text: 'two item lllala',
    isDone: true
  },
  {
    id: 2,
    text: 'three item lllala',
    isDone: true
  }])


  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newToDo])
  }

  const updateToDo = (todoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteToDo = (todoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id)
    setTodos(newTodos)
  }
  return (
    <div>
      <Form createNewToDo={createNewToDo} />
      <TodoList todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </div>
  )
}