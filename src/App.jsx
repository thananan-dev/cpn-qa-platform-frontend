import { ThemeProvider } from "@emotion/react";
import React from "react";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import theme from "./config/theme";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";

const App = () => {
  const requiredAuth = async () => {
    // Main idea,
    // Check login status by check credential in the local storage.
    // If it have credential, will be allow to the page, then the page use fecthing and pass token into header.
    // Check response status from request if status is 401 should force logout from fetcher interceptor

    const auth = localStorage.getItem("credential");

    if (!auth) {
      return redirect("/login");
    }

    const {
      state: { isLoggedIn },
    } = JSON.parse(auth);

    if (!isLoggedIn) {
      return redirect("/login");
    }

    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Dashboard,
      loader: requiredAuth,
      hydrateFallbackElement: <Loading />,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/sign-up",
      Component: SignUp,
    },
    {
      path: "/posts/:id/*",
      Component: Post,
      loader: requiredAuth,
      hydrateFallbackElement: <Loading />,
    },
    {
      path: "/*",
      element: <div>404 Not Found</div>,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
