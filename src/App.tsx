import { FormEvent } from "react";
import { AccountForm } from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import { UserForm } from "./components/UserForm";
import { useMultiStepForm } from "./Hooks/useMultiStepForm";
import "./styles/app.scss";

function App() {
  const { currentIndex, step, steps, isFirstStep, isLastStep, next, prev } =
    useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  const _submitHandler = (e: FormEvent) => {
    e.preventDefault();
    next();
  };
  return (
    <div className="App">
      <form onSubmit={_submitHandler}>
        <div className="step">
          {currentIndex + 1}/{steps?.length}
        </div>
        {step}
        <div className="buttons">
          {!isFirstStep && <button onClick={prev}>Prev</button>}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
