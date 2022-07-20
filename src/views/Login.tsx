import React, {FormEvent} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import {Button} from '../components/Button';

export const Login = () => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Logo src={logo} />
      <Form onSubmit={handleForm}>
        <Input type="mail" placeholder="Email" />
        <Input
          type="password"
          placeholder="Password"
          className="margin-bottom"
        />
        <Button text="Zaloguj" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin-bottom {
    margin-bottom: ${(props) => props.theme.marginSize.base};
  }
`;

const Form = styled.form`
  width: 30%;
`;

const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.paddingSize.sm};
  margin-bottom: ${(props) => props.theme.marginSize.sm};
  border: none;
  background-color: ${(props) => props.theme.colors.black};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  margin-bottom: ${(props) => props.theme.marginSize.lg};
`;
