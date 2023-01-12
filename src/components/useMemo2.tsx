import { useMemo, useState } from "react";

const ListEvenNumbers = ({ numbers }: { numbers: number[] }) => {
  console.log("Render Masalan Big List");

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

const UseMemo2Component = () => {
  const [query, setQuery] = useState("");
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);

  const listNumbers = useMemo(() => {
    return <ListEvenNumbers numbers={numbers} />;
  }, [numbers]);

  const onAddNumberHandler = () => {
    setNumbers((prevNumbers) => [
      ...prevNumbers,
      prevNumbers[prevNumbers.length - 1] + 1,
    ]);
  };

  return (
    <div>
      <p>{query}</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {listNumbers}
      <button onClick={onAddNumberHandler}>Add new number</button>
    </div>
  );
};

export default UseMemo2Component;
