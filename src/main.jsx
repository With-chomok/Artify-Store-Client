import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Error from "./pages/Error.jsx";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import MyGallery from "./pages/MyGallery.jsx";
import Favorites from "./pages/Favorites.jsx";
import AddArtwork from "./pages/AddArtwork.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home.jsx";
import ArtworkDetails from "./pages/ArtworkDetails.jsx";
import ExploreArtworks from "./pages/ExploreArtworks.jsx";
import Loading from "./components/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:5000/artworks"),
      },
      {
        path: "/home",

        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      {
        path: "/explore",
        element: <ExploreArtworks />,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:5000/artworks-explore"),
      },

      { path: "/artworks/id", element: <ArtworkDetails /> },

      {
        path: "/mygallery",

        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/myfavourite",

        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: "/addart",

        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },
      {
        path: "/artworks/:id",

        element: (
          <PrivateRoute>
            <ArtworkDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
