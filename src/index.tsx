import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/resetstyle.scss';
import './assets/scss/style.scss';
import { TodoListPage } from './pages/TodoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/itemDescription';
import { Layout } from './layouts/Layout';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <TodoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/'})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


