import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AddHrInterface} from '../../types/interfaces/Admin/AddHrInterface';
import {toast} from 'react-toastify';
import {validationEmail} from '../../utils/validationEmail';

export const AddHrForm = () => {
  const [form, setForm] = useState<AddHrInterface>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    maxStudents: 0,
  });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = {...form};
    setForm({...value, [`${e.target.name}`]: e.target.value});
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (!valid()) return;

    console.log(form);
  };

  const valid = (): boolean => {
    if (form.firstName.length === 0) {
      toast.error('Proszę uzupełnić pole Imię');
      return false;
    }

    if (form.lastName.length === 0) {
      toast.error('Proszę uzupełnić pole Nazwisko');
      return false;
    }

    if (!validationEmail(form.email)) {
      toast.error('Niepoprawny adres email');
      return false;
    }

    if (form.company.length === 0) {
      toast.error('Proszę uzupełnić pole Firma');
      return false;
    }

    return true;
  };

  return (
    <FormAccount onSubmit={handleForm}>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="firstname">Imię:</label>
        </div>
        <Input
          type="text"
          id="firstname"
          name="firstName"
          value={form.firstName}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="lastname">Nazwisko:</label>
        </div>
        <Input
          type="text"
          id="lastname"
          name="lastName"
          value={form.lastName}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="email">Email:</label>
        </div>
        <Input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="company">Firma:</label>
        </div>
        <Input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="maxStudents">Liczba osób do rezerwacji:</label>
        </div>
        <Input
          type="number"
          id="maxStudents"
          name="maxStudents"
          value={form.maxStudents}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <div className="btn-box">
        <Button text="Dodaj" type="submit" />
      </div>
    </FormAccount>
  );
};
