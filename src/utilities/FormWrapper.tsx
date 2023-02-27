import { ReactElement } from "react";
import "../styles/wrapper.scss";

type FormWrapperProps = {
  title: string;
  children: ReactElement[];
};
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="children">{children}</div>
    </div>
  );
};

export default FormWrapper;
