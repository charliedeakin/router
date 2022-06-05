import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PeopleContext } from "./../contexts/person.context";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  email: yup.string().email().required(),
});

const defaultValues = {
  name: "",
  age: "",
  email: "",
};

export default function PersonForm() {
  let navigate = useNavigate();
  const { addPerson } = useContext(PeopleContext);

  const { reset, register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid, isSubmitting, errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    addPerson(data);
    reset();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" {...register("name")} />
        {errors.name && (
          <label htmlFor="name" role="alert" className="errors">
            {`Name is a required field`}
          </label>
        )}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" age="age" id="age" {...register("age")} />
        {errors.age && (
          <label htmlFor="age" role="alert" className="errors">
            {`Age is a required field and must be a valid number`}
          </label>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" {...register("email")} />
        {errors.email && (
          <label htmlFor="email" role="alert" className="errors">
            {`Email must be a valid email address`}
          </label>
        )}
      </div>
      <div>
        <button type="reset" onClick={() => reset()}>
          Reset
        </button>
        <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
          Submit
        </button>
      </div>
    </form>
  );
}

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.name && <span>This field is required</span>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
