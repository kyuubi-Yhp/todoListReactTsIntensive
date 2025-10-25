import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { TodoListPage } from "./pages/TodoListPage";
import { ItemDescription } from "./pages/itemDescription";
import { ToDo } from "./models/todo-item";
import { ViewList } from "./pages/ViewList";

const todos: ToDo[] = [
  {
    id: 0,
    text: 'gthwefewfwefwe',
    isDone: false
  },
  {
    id: 1,
    text: 'wefwefewfw',
    isDone: true
  },
  {
    id: 2,
    text: 'thr56h56h554h',
    isDone: false
  },
  {
    id: 3,
    text: 'rth4w4hah4h55h54h55h45h45h',
    isDone: true
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/todo',
        element: <TodoListPage />
      },
      {
        path: '/list/',
        element: <ViewList todos={todos} />,
        children: [
          {
            path: ':id',
            element: <ItemDescription todos={todos} />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/' })



