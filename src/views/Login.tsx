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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (email === 'admin@wp.pl' && password === 'Qwerty1') {
      dispatch(setAuth({isAuth: true, role: Role.HR}));
      navigate(Role.ADMIN, {replace: true});
    }

    // const res = await fetch(`http://localhost:3002/login`, {
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
    // const data = await res.json;
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
