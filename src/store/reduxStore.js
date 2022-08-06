import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/index";

const saveToLocalStorage = (store) => {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const persistantStore = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistantStore,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
