import React, { FC } from "react";
import { connect } from "react-redux";
import { addOne, subOne, addOneAsync } from "../redux/actions";
import { IState } from "../redux/type";

type CounterProps = {
  count: number;
  addOne: () => void;
  subOne: () => void;
  addOneAsync: () => void;
};

const Counter: FC<CounterProps> = ({ count, addOne, subOne, addOneAsync }) => {
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={() => addOne()}>Add One</button>
        <button onClick={() => subOne()}>Sub One</button>
        <button onClick={() => addOneAsync()}>Add One Async</button>
      </div>

      <style jsx>{`
        .container {
          padding: 80px;
        }

        h1 {
          text-align: center;
          margin-bottom: 80px;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        button {
          margin: 16px;
          background: #1890ff;
          border-color: #1890ff;
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          color: #fff;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          outline: 0;
          order: 1px solid #d9d9d9;
          border-radius: 2px;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          height: 32px;
          line-height: 1.5715;
          padding: 4px 15px;
          position: relative;
          text-align: center;
          touch-action: manipulation;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          user-select: none;
          white-space: nowrap;
        }

        button:hover {
          background: #40a9ff;
          border-color: #40a9ff;
          color: #fff;
        }
      `}</style>
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
