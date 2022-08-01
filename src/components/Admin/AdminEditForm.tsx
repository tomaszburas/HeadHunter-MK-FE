import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AdminEditFormInterface} from '../../types/interfaces/Admin/AdminEditFormInterface';
import {toast} from 'react-toastify';
import {validationPassword} from '../../utils/validationPassword';
import {validationEmail} from '../../utils/validationEmail';

export const AdminEditForm = () => {
  const [form, setForm] = useState<AdminEditFormInterface>({
    email: '',
    fullName: '',
    password: '',
    passwordRepeat: '',
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
    if (form.password.length > 0 && !validationPassword(form.password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      return;
    }
    if (form.password.length > 0) {
      if (form.password !== form.passwordRepeat) {
        toast.error('Podane hasła różnią się');
        return;
      }
    }
    if (!validationEmail(form.email)) {
      toast.error('Niepoprawny adres email');
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
          <label htmlFor="password">Hasło:</label>
        </div>
        <Input
          type="text"
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
          type="text"
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
