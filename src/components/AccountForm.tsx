import FormWrapper from "../utilities/FormWrapper";

export function AccountForm() {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Passowrd</label>
      <input required type="password" />
    </FormWrapper>
  );
}
