import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';
import React from 'react';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {FormAccount} from '../../assets/styled/Form/FormAccount';

export const HrEditForm = () => {
  return (
    <FormAccount>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="fullname">Imię i nazwisko:</label>
        </div>
        <Input type="text" id="fullname" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="company">Firma:</label>
        </div>
        <Input type="text" id="company" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="email">Email:</label>
        </div>
        <Input type="text" id="email" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="password">Hasło:</label>
        </div>
        <Input type="text" id="password" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="passwordRepeat">Powtórz hasło:</label>
        </div>
        <Input type="text" id="passwordRepeat" />
      </InputWrapper>
      <div className="btn-box">
        <Button text="Zapisz" type="submit" />
      </div>
    </FormAccount>
  );
};
