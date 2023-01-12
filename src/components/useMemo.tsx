import { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [query, setQuery] = useState("");
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);

  // const evenNumbers = numbers.filter((el) => el % 2 === 0);

  // const evenNumbers = () => {
  //   return numbers.filter((el) => el % 2 === 0);
  // }

  const evenNumbers = useMemo(() => {
    // Masalan Heavy function
    console.log("Calculating");
    return numbers.filter((el) => el % 2 === 0);
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
      <ul>
        {evenNumbers.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <button onClick={onAddNumberHandler}>Add new number</button>
    </div>
  );
};

export default UseMemoComponent;
