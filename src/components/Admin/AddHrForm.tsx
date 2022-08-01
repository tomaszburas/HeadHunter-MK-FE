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
    fullName: '',
    company: '',
    maxStudents: '',
  });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = {...form};
    setForm({...value, [`${e.target.name}`]: e.target.value});
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (form.fullName.length === 0) {
      toast.error('Proszę uzupełnić pole Imię i nazwisko');
      return;
    }

    if (!validationEmail(form.email)) {
      toast.error('Niepoprawny adres email');
      return;
    }

    if (form.company.length === 0) {
      toast.error('Proszę uzupełnić pole Firma');
      return;
    }

    if (form.fullName === '') {
      toast.error('Proszę uzupełnić pole Liczba osób do rezerwacji');
      return;
    }

    console.log(form);
  };

  return (
    <FormAccount onSubmit={handleForm}>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="fullname">Imię i nazwisko:</label>
        </div>
        <Input
          type="text"
          id="fullname"
          name="fullName"
          value={form.fullName}
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
        <Button text="Zapisz" type="submit" />
      </div>
    </FormAccount>
  );
};
