import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { COUNTER_INCREIMENT, COUNTER_DECREIMENT } from "./actionTypes";
import { IState } from "./type";

export const reducer = (state: IState = { count: 0 }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (state.count) nextState.count = state.count;
      return nextState;
    case COUNTER_INCREIMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_DECREIMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
