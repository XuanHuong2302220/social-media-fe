import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import theme from "./config/theme.js";
import Home from "./pages/home.jsx";
import Navbar from "./components/home/navbar/Navbar.jsx";
import ErrorPage from "./pages/error.jsx";
import Profile from "./pages/profile.jsx";
import { AuthProvider, useAuthContext } from "./contexts/authContext.jsx";
import Login from "./pages/auth/login.jsx";
import Signup from "./pages/auth/signup.jsx";
import VerifiedEmail from "./pages/verifiedEmail.jsx";

const Router = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "/users/:id/verify/:token",
      element: authUser ? <Navigate to="/" /> : <VerifiedEmail />,
    },
    {
      path: "/",
      element: authUser ? <Navbar /> : <Navigate to="/login" />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </AuthProvider>
);
