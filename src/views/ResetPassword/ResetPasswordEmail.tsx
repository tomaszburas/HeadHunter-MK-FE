import {FormEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {API_URL} from '../../config';
import {CenterContainer} from '../../assets/styled/CenterContainer';
import {Logo} from '../../assets/styled/Logo';
import logo from '../../assets/images/logo.png';
import {LoginForm} from '../../assets/styled/LoginForm';
import {Input} from '../../assets/styled/Input';
import {Button} from '../../components/Button';
import styled from 'styled-components';

export const ResetPasswordEmail = () => {
  const [email, setEmail] = useState('');
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoad(true);

    const res = await fetch(`${API_URL}/auth/reset-password`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success(
        'Na twój adres email zostały wsysłane instrukcje dotyczące zmiany hasła'
      );
      navigate('/', {replace: true});
    } else {
      toast.error(data.message);
    }

    setLoad(false);
  };
  return (
    <CenterContainer>
      <Text className="margin-bottom-xl2">Zresetuj hasło</Text>
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
        <Button type="submit" text="Resetuj hasło" load={load} />
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
