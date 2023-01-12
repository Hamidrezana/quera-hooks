import { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClickHandler = () => {
    inputRef.current?.focus?.();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button ref={buttonRef} onClick={onClickHandler}>
        Focus on input
      </button>
    </div>
  );
};

export default UseRefComponent;
