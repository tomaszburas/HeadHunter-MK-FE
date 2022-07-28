import React, {FormEvent} from 'react';
import logo from '../assets/images/logo.png';
import {Button} from '../components/Button';
import {CenterContainer} from '../assets/styled/CenterContainer';
import {Form} from '../assets/styled/Form';
import {Input} from '../assets/styled/Input';
import {Logo} from '../assets/styled/Logo';

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
        <Button type="submit" text="Zaloguj" />
      </Form>
    </CenterContainer>
  );
};
