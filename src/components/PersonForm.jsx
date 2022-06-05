import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PeopleContext } from "./../contexts/person.context";


export default function PersonForm() {
    let navigate = useNavigate();
    const { addPerson } = useContext(PeopleContext);

  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data) => {
  console.log(data)
  addPerson(data);
  reset();
  navigate('/');
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
            
      
      <input {...register("name", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}