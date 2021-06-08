import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import Routes from './Routes';

const Router = window !== undefined ? BrowserRouter : StaticRouter;

function ReactApp(_, railsContext) {
  return () => (
    <Router location={railsContext?.location}>
      <main>
        <Routes />
      </main>
    </Router>
  );
}

export default ReactApp;
