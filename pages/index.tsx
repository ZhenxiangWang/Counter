import React, { FC } from "react";
import { connect } from "react-redux";
import { addOne, subOne, addOneAsync } from "../redux/actions";
import { IState } from "../redux/type";
import styles from "../styles/Counter.module.scss";

type CounterProps = {
  count: number;
  addOne: () => void;
  subOne: () => void;
  addOneAsync: () => void;
};

const Counter: FC<CounterProps> = ({ count, addOne, subOne, addOneAsync }) => {
  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <div className={styles["button-container"]}>
        <button onClick={() => addOne()}>Add One</button>
        <button onClick={() => subOne()}>Sub One</button>
        <button onClick={() => addOneAsync()}>Add One Async</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  count: state.count,
});

const mapDispatchToProps = {
  addOne,
  subOne,
  addOneAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
