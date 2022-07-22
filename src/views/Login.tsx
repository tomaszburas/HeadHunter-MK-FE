import React, {FormEvent} from 'react';
import logo from '../assets/images/logo.png';
import {Button} from '../components/Button';
import {CenterContainer} from '../styled/CenterContainer';
import {Form} from '../styled/Form';
import {Input} from '../styled/Input';
import {Logo} from '../styled/Logo';

export const Login = () => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <CenterContainer>
      <Logo src={logo} className="margin-bottom-lg" />
      <Form onSubmit={handleForm}>
        <Input type="mail" placeholder="Email" className="margin-bottom-sm" />
        <Input
          type="password"
          placeholder="Hasło"
          className="margin-bottom-base"
        />
        <Button text="Zaloguj" />
      </Form>
    </CenterContainer>
  );
};
