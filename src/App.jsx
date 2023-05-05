import { useState } from "react";
import FormInput from "./components/FormInput";
import "./styles/App.css";

function App() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters long and should not include special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters long and must include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match",
      label: "Confirm Password",
      pattern: formValues.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(
      `Hi ${formValues.username}, your form has been submitted successfully.`
    );
  };

  return (
    <div className="layout">
      <form onSubmit={handleClick}>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={formValues[input.name]}
              onChange={onChange}
            />
          );
        })}

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
