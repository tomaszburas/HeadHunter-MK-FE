import {FormEvent, useEffect, useState} from 'react';
import styled from 'styled-components';
import {CenterContainer} from '../assets/styled/CenterContainer';
import logo from '../assets/images/logo.png';
import {Logo} from '../assets/styled/Logo';
import {Input} from '../assets/styled/Input';
import {Button} from '../components/Button';
import {LoginForm} from '../assets/styled/LoginForm';
import {validationPassword} from '../utils/validationPassword';
import {toast} from 'react-toastify';
import {Role} from '../types/enums/Role';
import {API_URL} from '../config';
import {useNavigate, useParams} from 'react-router-dom';

interface Props {
  role: Role;
}

export const AccountActivation = ({role}: Props) => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [load, setLoad] = useState(false);
  const {id, registerToken} = useParams();
  const [apiUrl, setApiUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (role === Role.HR) {
      setApiUrl(`/auth/register-hr`);
    }

    if (role === Role.STUDENT) {
      setApiUrl(`/auth/register-student`);
    }
  }, [role]);

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

    const res = await fetch(`${API_URL}${apiUrl}/${id}/${registerToken}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        passwordRepeat,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Aktywacja konta przebiegła pomyślnie');
      navigate('/', {replace: true});
    } else {
      toast.error(data.message);
    }

    setLoad(false);
  };
  return (
    <CenterContainer>
      <Text className="margin-bottom-xl2">Wpisz hasło aby aktywować konto</Text>
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
        <Button type="submit" text="Aktywuj" load={load} />
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
