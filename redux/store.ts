import { createStore, Store, applyMiddleware } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducer";
import { IState } from "./type";

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true });
