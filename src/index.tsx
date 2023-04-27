import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from './app/store';
import Home from './gifsAgainstHumanity/routes/Home';
import AppContainer from './gifsAgainstHumanity/routes/App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/ori",
    element: <div>ori</div>
  }
]);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </Provider>
  </React.StrictMode>
);