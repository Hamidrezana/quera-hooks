import { memo, useCallback, useState } from "react";

const ListEvenNumbers = ({ numbers }: { numbers: number[] }) => {
  return (
    <ul>
      {numbers
        .filter((el) => el % 2 === 0)
        .map((el) => (
          <li key={el}>{el}</li>
        ))}
    </ul>
  );
};

const HeavyComponent = ({ onClick }: { onClick: () => void }) => {
  console.log("Rendering Heavy Component");
  return (
    <div>
      <p>This is Masalan Heavy Component</p>
      <button onClick={onClick}>Add New Number</button>
    </div>
  );
};

const MemoHeavyComponent = memo(HeavyComponent);

const UseCallbackComponent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const onClickCallbackHandler = useCallback(() => {
    setNumbers((prevNumbers) => [
      ...prevNumbers,
      prevNumbers[prevNumbers.length - 1] + 1,
    ]);
  }, []);

  const onClickHandler = () => {
    setNumbers((prevNumbers) => [
      ...prevNumbers,
      prevNumbers[prevNumbers.length - 1] + 1,
    ]);
  };

  console.log("render Main Component");

  return (
    <div>
      <MemoHeavyComponent onClick={onClickCallbackHandler} />
      <ListEvenNumbers numbers={numbers} />
    </div>
  );
};

export default UseCallbackComponent;
