import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MessageBoard from "./messageBoard";
import Welcome from "./welcome";
import AllPosts from "./allPosts";
import PostView from "./postView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />
          },
          {
            path: "post/:postId",
            element: <PostView />
          }
        ]
      },
      {
        path: "welcome",
        element: <Welcome />
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router}  />
  );
}

export default App;

function Layout() {
  return <h2>Layout</h2>;
}
