import { useReducer } from "react";

interface State {
  count: number;
}

type ActionType = "increment" | "decrement" | "reset";

interface ReducerAction {
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  count: 0,
};

function reducer(state: State, action: ReducerAction): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload || 0 };
    default:
      throw new Error();
  }
}

// state => {count, firstName, lastName,}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIncrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const onDecrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const onResetHandler = () => {
    dispatch({ type: "reset", payload: 30 });
  };

  return (
    <div>
      count: {state.count}
      <button onClick={onIncrementHandler}>Increment</button>
      <button onClick={onDecrementHandler}>Decrement</button>
      <button onClick={onResetHandler}>Reset</button>
    </div>
  );
};

export default UseReducerComponent;
