import React from 'react';
import {Connect} from './store'


const Item = ({cxRun, it, v})=><div className="item">
  <div className="item_txt" onClick={e=>cxRun('a_done',it)}>
    {v+1}) {it.done ? <s>{it.value}</s> : <b>{it.value}</b>}
  </div>
  <div className="item_del" onClick={e=>cxRun('a_delete',it)}>
    &times;
  </div>
</div>


const TodoList = ({cxRun, todos})=><div className="todos">
  {
    todos.map((it,v)=><Item key={v} cxRun={cxRun} it={it} v={v}/>)
  }
</div>

export default Connect(TodoList);