import {FormEvent, useState} from 'react';
import {CenterContainer} from '../../assets/styled/CenterContainer';
import {Input} from '../../assets/styled/Input';
import {LoginForm} from '../../assets/styled/LoginForm';
import {Logo} from '../../assets/styled/Logo';
import logo from '../assets/images/logo.png';
import {Button} from '../../components/Button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3002/login`, {
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

    const data = await res.json;

    console.log(data);
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
