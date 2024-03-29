import React, { createContext, useReducer } from "react";

let multi : any 
let nada:React.Dispatch<any> = () => { return multi };

let AppContext = createContext({state:multi,dispatch: nada});

const initialState = {
  count: 0
}

let reducer = (state : any, action : any) => {
  switch(action.type) {
    case "setCount": {
      return { ...state, count: action.user }
    }
  }
  return state;
};

function AppContextProvider(props : any) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };