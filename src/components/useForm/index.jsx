import Input from "./Input";
import useForm from "./useForm";

const UseFormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form>
      <Input label="FirstName" {...register("firstName")} />
      <Input label="LastName" {...register("lastName")} />
      <button onClick={handleSubmit(onSubmitHandler)}>Submit</button>
    </form>
  );
};

export default UseFormComponent;
