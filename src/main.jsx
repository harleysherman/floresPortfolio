import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
// import Timeline from "./pages/Timeline.jsx";
// import Login from "./src/pages/Login.jsx"
import Error from './pages/Error/Error.jsx';
import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages/Contact/Contact.jsx';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Project from './pages/Portfolio/Project.jsx';
import Post from './pages/Blog/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/project/:projectId',
        element: <Project />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Blog/:postId',
        element: <Post />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);