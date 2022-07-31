import {FormEvent} from 'react';
import logo from '../assets/images/logo.png';
import {Button} from '../components/Button';
import {CenterContainer} from '../assets/styled/CenterContainer';
import {LoginForm} from '../assets/styled/LoginForm';
import {Input} from '../assets/styled/Input';
import {Logo} from '../assets/styled/Logo';

export const Login = () => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <CenterContainer>
      <Logo src={logo} className="margin-bottom-lg" />
      <LoginForm onSubmit={handleForm}>
        <Input
          type="mail"
          placeholder="Email"
          className="margin-bottom-sm"
          required
        />
        <Input
          type="password"
          placeholder="Hasło"
          className="margin-bottom-base"
          required
        />
        <Button type="submit" text="Zaloguj" />
      </LoginForm>
    </CenterContainer>
  );
};
