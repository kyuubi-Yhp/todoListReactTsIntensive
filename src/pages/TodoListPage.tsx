import { Header } from "../components/header/Header"
import { Form } from "../components/form/Form"
import { TodoList } from "../components/todolist/TodoList"


export const TodoListPage = () => {
  return (
    <div>
      <Header />
      <Form />
      <TodoList />
    </div>
  )
}