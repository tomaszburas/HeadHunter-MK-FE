import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {ChangeEvent, FormEvent, useState} from 'react';
import {HrEditFormInterface} from '../../types/interfaces/Hr/HrEditFormInterface';
import {validationPassword} from '../../utils/validationPassword';
import {toast} from 'react-toastify';
import {validationEmail} from '../../utils/validationEmail';

export const HrEditForm = () => {
  const [form, setForm] = useState<HrEditFormInterface>({
    company: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordRepeat: '',
  });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = {...form};
    setForm({...value, [`${e.target.name}`]: e.target.value});
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (!valid()) return false;

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

    if (form.company.length === 0) {
      toast.error('Proszę uzupełnić pole Firma');
      return false;
    }

    if (form.password.length > 0 && !validationPassword(form.password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      return false;
    }

    if (form.password.length > 0) {
      if (form.password !== form.passwordRepeat) {
        toast.error('Podane hasła różnią się');
        return false;
      }
    }

    if (!validationEmail(form.email)) {
      toast.error('Niepoprawny adres email');
      return false;
    }

    return true;
  };

  return (
    <FormAccount onSubmit={handleForm}>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="firstName">Imię:</label>
        </div>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="lastName">Nazwisko:</label>
        </div>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName}
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
          <label htmlFor="password">Hasło:</label>
        </div>
        <Input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={changeValue}
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="passwordRepeat">Powtórz hasło:</label>
        </div>
        <Input
          type="password"
          id="passwordRepeat"
          name="passwordRepeat"
          value={form.passwordRepeat}
          onChange={changeValue}
        />
      </InputWrapper>
      <div className="btn-box">
        <Button text="Zapisz" type="submit" />
      </div>
    </FormAccount>
  );
};
