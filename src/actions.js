export const  __module_name = 'actions'

export const initState = {
    todos:[],
    value:'',
}

export const a_enter = ({state,args}) => {
  let {value,todos} = state;
  todos.push({
    id:(Math.random()+"").substr(2),
    value:value,
    done:false
  });
  return {
    value:'',
    todos
  }
}

export const a_done = ({state,args}) => {
  let {todos} = state;
  let id = args.id;
  todos = todos.map(it=>(it.id === id ? (it.done = !it.done, it) : it))
  return {
    todos
  }
}

export const a_delete = ({state,args}) => {
  let {todos} = state;
  let id = args.id;
  todos = todos.filter(it=>it.id !== id)
  return {
    todos
  }
}
