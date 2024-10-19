interface Props {
  myForm: { firstName: string; lastName: string };
  setForm: (value: { firstName: string; lastName: string }) => void;
}

export default function Form({ myForm, setForm }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateForm(name, value);
  };

  const updateForm = (name: string, value: string) => {
    const newForm = { ...myForm, [name]: value };
    setForm(newForm);
  };

  return (
    <div>
      <input type="text" name="firstName" value={myForm.firstName} onChange={handleInputChange} placeholder="First Name" />
      <input type="text" name="lastName" value={myForm.lastName} onChange={handleInputChange} placeholder="Last Name" />
    </div>
  );
}
