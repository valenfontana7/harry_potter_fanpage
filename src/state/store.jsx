import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(reducer, applyMiddleware(thunk));

export default store;
