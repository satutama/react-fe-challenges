import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import BlogPreviewCard from './app/blog-preview-card/blog-preview-card';

import TicTacToe from './app/tic-tac-toe/tic-tac-toe';
import Navbar from './components/navbar';
import ErrorPage from './error-page';

const AppLayout = () => {
  return (<>
  <Navbar />
  <Outlet />
  </>)
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <TicTacToe />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToe/>,
      },
      {
        path: "blog-preview-card",
        element: <BlogPreviewCard/>,
      },
    ],
    errorElement: <ErrorPage />,
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
