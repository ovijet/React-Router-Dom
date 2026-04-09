import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Books from "./book/Books";
import About from "./assets/components/About";
import Blog from "./assets/components/Blog";
import UsersDelails from "./assets/components/usersDelails";
import Post from "./assets/components/Post";
import postD2 from "./assets/components/postD2";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/books",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Books,
      },
      {
        path: "/users/:usersId",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.usersId}`,
          );
          return res.json();
        },
        Component: UsersDelails,
      },
      {
        path: "post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post,
      },
      {
        path: "post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: postD2,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
