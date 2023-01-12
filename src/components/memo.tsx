import { memo, useState } from "react";

const HeavyComponent = ({
  numbers,
  onClick,
}: {
  numbers: number[];
  onClick: () => void;
}) => {
  console.log("Rendering");
  return (
    <div>
      <p>This is Masalan Heavy Component</p>
      <ul>
        {numbers
          .filter((el) => el % 2 === 0)
          .map((el) => (
            <li key={el}>{el}</li>
          ))}
      </ul>
      <button onClick={onClick}>Add New Number</button>
    </div>
  );
};

const MemoHeavyComponent = memo(HeavyComponent, (prevProps, nextProps) => {
  if (prevProps.numbers.length !== nextProps.numbers.length) {
    return false;
  }
  return true;
});

const MemoComponent = () => {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  console.log('render Main Component');

  const onClickHandler = () => {
    setNumbers((prevNumbers) => [
      ...prevNumbers,
      prevNumbers[prevNumbers.length - 1] + 1,
    ]);
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <MemoHeavyComponent numbers={numbers} onClick={onClickHandler} />
    </div>
  );
};

export default MemoComponent;
