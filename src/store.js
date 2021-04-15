import React, { createElement, Component, createContext } from 'react';
import createStoreFactory from 'redoor';

import * as actions from './actions'
import * as actionsSetup from './actionsSetup'

const createStore = createStoreFactory({Component, createContext, createElement});

let __dbg = {
  port:8333,
};

const { Provider, Connect } = createStore(
  [
    actions,
    actionsSetup
  ],
  __dbg,
);

export { Provider, Connect };