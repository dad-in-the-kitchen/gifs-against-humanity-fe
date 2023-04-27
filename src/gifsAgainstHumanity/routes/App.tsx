import React from 'react';
import { Counter } from '../../features/counter/Counter';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}


function Header() {
  return (
    <div>
      <h1>GIFs Against Humanity</h1>
    </div>
  );
};

function Bottom() {
  return (
    <div>
      <p>Made By <a href='https://github.com/dad-in-the-kitchen'>Dad In The Kitchen</a></p>
    </div>
  );
};






export default function AppContainer(props: {children: JSX.Element}) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Bottom />
    </React.Fragment>
  );
};
