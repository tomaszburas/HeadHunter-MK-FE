import React, {FormEvent} from 'react';
import styled from 'styled-components';
import {CenterContainer} from '../styled/CenterContainer';
import logo from '../assets/images/logo.png';
import {Logo} from '../styled/Logo';
import {Input} from '../styled/Input';
import {Button} from '../components/Button';
import {Form} from '../styled/Form';

export const AccountActivation = () => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <CenterContainer>
      <Text>Witaj, xxx@megak.pl 👋</Text>
      <Text className="margin-bottom-xl2">Wpisz hasło aby aktywować konto</Text>
      <Logo src={logo} className="margin-bottom-lg" />
      <Form onSubmit={handleForm}>
        <Input type="password" placeholder="Hasło" />
        <Input
          type="password"
          placeholder="Powtórz hasło"
          className="margin-bottom-base"
        />
        <Button text="Aktywuj" />
      </Form>
    </CenterContainer>
  );
};

const Text = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.marginSize.base};
`;
