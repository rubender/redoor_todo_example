import React, { createElement, Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import {Connect, Provider} from './store'

import Input from './InputComp'
import TodoList from './TodoList'


const Main = () => (
  <Provider>
    <h1>Todo:</h1>
    <TodoList/>
    <hr/>
    <Input/>
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById("app"));

