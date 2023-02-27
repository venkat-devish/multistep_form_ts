import { FormEvent, useState } from "react";
import { AccountForm } from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import { UserForm } from "./components/UserForm";
import { useMultiStepForm } from "./Hooks/useMultiStepForm";
import "./styles/app.scss";
import { INITIAL_DATA } from "./utilities/fieldsData";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { currentIndex, step, steps, isFirstStep, isLastStep, next, prev } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const _submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) next();
    alert("Form submitted successfully");
  };

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <div className="App">
      <form onSubmit={_submitHandler}>
        <div className="step">
          {currentIndex + 1}/{steps?.length}
        </div>
        {step}
        <div className="buttons">
          {!isFirstStep && (
            <button type="button" onClick={prev}>
              Prev
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
