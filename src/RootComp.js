import React, {useEffect} from 'react';
import {Connect} from './store'



const RootComp = (props)=>{
  let {cxRun, loading, children} = props;

  useEffect(()=>{
    cxRun("a_setup");
  },[])

  if(loading) {
    return <div className="loading">loading...</div>
  }

  return <div className="root">
    {children}
  </div>
}

export default Connect(RootComp);
