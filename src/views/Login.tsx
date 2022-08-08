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
import {API_URL} from '../config';
import {toast} from 'react-toastify';
import {setAdmin} from '../redux/features/adminSlice';
import {useNavigate} from 'react-router-dom';
import {setStudent} from '../redux/features/studentSlice';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoad(true);

    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
    });

    const data = await res.json();

    if (data.success) {
      if (data.user.role === Role.ADMIN) {
        dispatch(
          setAdmin({
            ...data.user,
          })
        );
      }
      if (data.user.role === Role.STUDENT) {
        dispatch(
          setStudent({
            ...data.user,
          })
        );
      }
      // if (data.user.role === Role.HR) {
      //   dispatch(
      //       setAdmin({
      //         ...data.user
      //       })
      //   );
      // }

      dispatch(setAuth({isAuth: true, role: data.user.role, id: data.user.id}));
      navigate(data.user.role, {replace: true});
    } else {
      toast.error('Podano zły adres email lub hasło');
    }

    setLoad(false);
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
        <Button type="submit" text="Zaloguj" load={load} />
      </LoginForm>
    </CenterContainer>
  );
};
