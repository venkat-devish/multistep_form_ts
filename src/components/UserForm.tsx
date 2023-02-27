import FormWrapper from "../utilities/FormWrapper";

type UserProps = {
  firstName: string;
  lastName: string;
  age: string;
};

type UpdateFieldProps = UserProps & {
  updateFields: (data: Partial<UserProps>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UpdateFieldProps) {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        min={1}
        required
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
