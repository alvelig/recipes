import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import b from 'bootstrap/dist/css/bootstrap.css';
import s from './styles.css';
import Style from './components/Style';

import Routes from './Routes';
import NavBar from './components/NavBar';

const Router = typeof window !== 'undefined' ? BrowserRouter : StaticRouter;

function ReactApp(_, railsContext) {
  return (() => (
    <Router location={railsContext?.location}>
      <NavBar />
      <main>
        <Routes />
      </main>
      {/* eslint-disable-next-line no-underscore-dangle */}
      <Style css={b._getCss()} />
      {/* eslint-disable-next-line no-underscore-dangle */}
      <Style css={s._getCss()} />
    </Router>
  ));
}

export default ReactApp;
