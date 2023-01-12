import { useState } from "react";

async function sendRequest(url: string, method: string) {
  const response = await fetch(url, {
    method: method.toUpperCase(),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

interface State {
  isLoading: boolean;
  error: boolean;
  data: any;
}

const useRequest = (url: string, method: string) => {
  const [state, setState] = useState<State>({
    isLoading: false,
    data: null,
    error: false,
  });

  const send = async () => {
    setState({ data: null, error: false, isLoading: true });
    try {
      const data = await sendRequest(url, method);
      setState({ data, error: false, isLoading: false });
    } catch (err) {
      setState({ data: null, error: true, isLoading: false });
    }
  };

  return {
    ...state,
    send,
  };
};

const UseRequestComponent = () => {
  const { isLoading, data, error, send } = useRequest(
    "https://jsonplaceholder.typicode.com/posts",
    "get"
  );

  const onClickHandler = () => {
    send();
  };
  return (
    <div>
      <p>isLoading: {isLoading ? "true" : "false"}</p>
      <p>hasError: {error ? "true" : "false"}</p>
      {data && <p>dataLength: {data?.length}</p>}
      <button onClick={onClickHandler}>Send Request</button>
    </div>
  );
};

export default UseRequestComponent;
