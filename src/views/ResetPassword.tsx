import {FormEvent, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {validationPassword} from '../utils/validationPassword';
import {toast} from 'react-toastify';
import {API_URL} from '../config';
import {CenterContainer} from '../assets/styled/CenterContainer';
import {Logo} from '../assets/styled/Logo';
import logo from '../assets/images/logo.png';
import {LoginForm} from '../assets/styled/LoginForm';
import {Input} from '../assets/styled/Input';
import {Button} from '../components/Button';
import styled from 'styled-components';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [load, setLoad] = useState(false);
  const {id, refreshToken} = useParams();
  const navigate = useNavigate();

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoad(true);

    if (!validationPassword(password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      setLoad(false);
      return;
    }
    if (password !== passwordRepeat) {
      toast.error('Podane hasła różnią się');
      setLoad(false);
      return;
    }

    const res = await fetch(
      `${API_URL}/auth/change-password/${id}/${refreshToken}`,
      {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success('Hasło zostało zmienione');
      navigate('/', {replace: true});
    } else {
      toast.error(data.message);
    }

    setLoad(false);
  };
  return (
    <CenterContainer>
      <Text className="margin-bottom-xl2">Wpisz nowe hasło</Text>
      <Logo src={logo} className="margin-bottom-lg" />
      <LoginForm onSubmit={handleForm}>
        <Input
          type="password"
          placeholder="Hasło"
          className="margin-bottom-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Powtórz hasło"
          className="margin-bottom-base"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          required
        />
        <Button type="submit" text="Zapisz" load={load} />
        <Link to="/" className="back-btn-box">
          <Button text="Wróć" />
        </Link>
      </LoginForm>
    </CenterContainer>
  );
};

const Text = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.base};
  margin-bottom: ${(props) => props.theme.marginSize.sm};

  @media only screen and (max-width: 400px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
