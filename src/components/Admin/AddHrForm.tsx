import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AddHrInterface} from '../../types/interfaces/Admin/AddHrInterface';
import {toast} from 'react-toastify';
import {validationEmail} from '../../utils/validationEmail';
import {API_URL} from '../../config';

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

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!valid()) return;

    const res = await fetch(`${API_URL}/admin/add/hr`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Hr został dodany');
    } else {
      toast.error('Hr nie został dodany');
    }
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
          type="email"
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
