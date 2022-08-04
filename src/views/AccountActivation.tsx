import {FormEvent, useState} from 'react';
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

interface Props {
  role: Role;
}

export const AccountActivation = ({role}: Props) => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (!validationPassword(password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      return;
    }
    if (password !== passwordRepeat) {
      toast.error('Podane hasła różnią się');
      return;
    }
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
        <Button type="submit" text="Aktywuj" />
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
