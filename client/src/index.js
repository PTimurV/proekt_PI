import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import FlatStore from "./store/FlatStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        flat: new FlatStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
