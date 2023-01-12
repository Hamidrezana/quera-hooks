import {
  DependencyList,
  EffectCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    effect?.();
  }, deps || []);
};

const UseUpdateEffectComponent = () => {
  const [state, setState] = useState("");

  useUpdateEffect(() => {
    console.log("state: ", state);
  }, [state]);

  return <input value={state} onChange={(e) => setState(e.target.value)} />;
};

export default UseUpdateEffectComponent;
