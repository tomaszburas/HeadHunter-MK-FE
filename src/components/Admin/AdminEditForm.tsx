import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AdminEditFormInterface} from '../../types/interfaces/Admin/AdminEditFormInterface';
import {toast} from 'react-toastify';
import {validationPassword} from '../../utils/validationPassword';
import {validationEmail} from '../../utils/validationEmail';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {API_URL} from '../../config';
import {setAdminEmail} from '../../redux/features/adminSlice';

export const AdminEditForm = () => {
  const {email, id} = useSelector((store: RootState) => store.admin);
  const dispatch = useDispatch();
  const [form, setForm] = useState<AdminEditFormInterface>({
    email: email || '',
    password: '',
    passwordRepeat: '',
  });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = {...form};
    setForm({...value, [`${e.target.name}`]: e.target.value});
  };

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid()) return;

    const res = await fetch(`${API_URL}/admin/update/${id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success('Zmiany zostały zapisane');

      if (email !== form.email) {
        dispatch(setAdminEmail({email: form.email}));
      }
    } else {
      toast.error('Zmiany nie zostały zapisane');
    }
  };

  const valid = (): boolean => {
    if (
      email === form.email &&
      form.password === '' &&
      form.passwordRepeat === ''
    ) {
      toast.error('Zmień dane');
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
