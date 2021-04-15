import React from 'react';
import {Connect} from './store'


const Input = ({cxRun, value})=><label className="input">
  Todo:
  <input onChange={ e=>cxRun({ value:e.target.value }) } value={value} type="text" />
  <button onClick={ e=>cxRun('a_enter') } disabled={!value.length}>
    ok
  </button>
</label>

export default Connect(Input);