import {FormEvent, useState} from 'react';
import logo from '../assets/images/logo.png';
import {Button} from '../components/Button';
import {CenterContainer} from '../assets/styled/CenterContainer';
import {LoginForm} from '../assets/styled/LoginForm';
import {Input} from '../assets/styled/Input';
import {Logo} from '../assets/styled/Logo';
import {useDispatch} from 'react-redux';
import {Role} from '../types/enums/Role';
import {setAuth} from '../redux/features/authSlice';
import {useNavigate} from 'react-router-dom';
import {API_URL} from '../config';
import {toast} from 'react-toastify';
import {setAdmin} from '../redux/features/adminSlice';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    // const res = await fetch(`${API_URL}/admin/login`, {
    //   method: 'POST',
    //   credentials: 'include',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email.trim(),
    //     password: password.trim(),
    //   }),
    // });
    //
    // const data = await res.json();
    //
    // if (res.ok) {
    //   if (data.role === Role.ADMIN) {
    //     dispatch(
    //       setAdmin({
    //         email: data.email,
    //         id: data.id,
    //       })
    //     );
    //   }
    //
    //   dispatch(setAuth({isAuth: true, role: data.role}));
    //   navigate(data.role, {replace: true});
    // } else {
    //   toast.error(data.error);
    //   return;
    // }

    dispatch(setAuth({isAuth: true, role: Role.HR}));
    navigate(Role.HR, {replace: true});
  };

  return (
    <CenterContainer>
      <Logo src={logo} className="margin-bottom-lg" />
      <LoginForm onSubmit={handleForm}>
        <Input
          type="email"
          placeholder="Email"
          className="margin-bottom-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Hasło"
          className="margin-bottom-base"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" text="Zaloguj" />
      </LoginForm>
    </CenterContainer>
  );
};
