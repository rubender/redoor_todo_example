import createStoreFactory from 'redoor';
import React, { createElement, Component, createContext } from 'react';
//import createStoreFactory from './lib/redoor';
import * as actions from './actions'


const createStore = createStoreFactory({Component, createContext, createElement});


let __dbg = {
  port:8333,
};

const { Provider, Connect } = createStore(
  [
    actions,
  ],
  __dbg,
);

export { Provider, Connect };