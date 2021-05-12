export interface IState {
  count: number;
}

export type CounterAction = {
  type: string;
};

export type DispatchType = (args: CounterAction) => CounterAction;
