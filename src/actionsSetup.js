export const  __module_name = 'actionsSetup'

let __initData = null;
let __setState = null;
let __getState = null;
let __emit = null;

export const bindStateMethods = (stateFn, updateState, emit) => {
  __getState = stateFn;
  __setState = updateState;
  __emit = emit;
};


export const initState = {
  loading:true,
}


let CONST_DATA = [
  {id:1,value:'some data 1',done:false},
  {id:2,value:'some data 2',done:false},
]

function loading() {
  return new Promise((resolve,reject) => {
    setTimeout(e=>{
      resolve(CONST_DATA)
    },600)
  })
}

export const a_setup = async ({state,args}) => {
  __setState({loading:true});
  let data = await loading();
  __setState({
    loading:false,
    todos:data
  })
}

