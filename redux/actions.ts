import { COUNTER_INCREIMENT, COUNTER_DECREIMENT } from "./actionTypes";
import { CounterAction, DispatchType } from "./type";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const addOne = () => (dispatch: DispatchType) => {
  const action: CounterAction = { type: COUNTER_INCREIMENT };
  return dispatch(action);
};

export const subOne = () => (dispatch: DispatchType) => {
  const action: CounterAction = { type: COUNTER_DECREIMENT };
  return dispatch(action);
};

export const addOneAsync = () => async (dispatch: DispatchType) => {
  await sleep(2000);
  const action: CounterAction = { type: COUNTER_INCREIMENT };
  return dispatch(action);
};
