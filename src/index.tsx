import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import { store } from './app/store';
import Lobby from './gifsAgainstHumanity/routes/Lobby';
import Home from './gifsAgainstHumanity/routes/Home';
import GameRoom from './gifsAgainstHumanity/routes/GameRoom';
import AppContainer from './gifsAgainstHumanity/routes/App';


const router = createBrowserRouter([
  {
    path: '/*',
    element: <Home />,
  },
  {
    path: '/lobby/:lobbyCode',
    element: <Lobby />
  },
  {
    path: '/game/:gameCode',
    element: <GameRoom />
  }
]);


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </Provider>
  </React.StrictMode>
);
