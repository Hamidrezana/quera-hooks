import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (callbackFunc) => (e) => {
    e.preventDefault();
    callbackFunc?.(values);
  };

  // Pass name, value, onChange to inputs
  const register = (name) => {
    return {
      name,
      value: values[name] || "",
      onChange: (e) =>
        setValues((prevValues) => {
          return {
            ...prevValues,
            [name]: e.target.value,
          };
        }),
    };
  };

  return {
    handleSubmit,
    register,
  };
};

export default useForm;
