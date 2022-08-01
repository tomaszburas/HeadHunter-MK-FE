import {Input} from '../../../assets/styled/Input';
import {Textarea} from '../../../assets/styled/Textarea';
import {ChangeEvent} from 'react';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';
import {AboutMeInterface} from '../../../types/interfaces/Student/AboutMeInterface';

interface Props {
  state: AboutMeInterface;
  setState: (param: AboutMeInterface) => void;
}

export const AboutMe = ({state, setState}: Props) => {
  const {
    aboutMe,
    email,
    fullName,
    password,
    passwordRepeat,
    phone,
    usernameGh,
  } = state;

  const changeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = {...state};
    setState({...value, [`${e.target.name}`]: e.target.value});
  };

  return (
    <Wrapper>
      <Title>O mnie</Title>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="fullName">Imię i nazwisko:</label>
        </div>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="email">Email:</label>
        </div>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="password">Hasło:</label>
        </div>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={changeValue}
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="passwordRepeat">Powtórz hasło:</label>
        </div>
        <Input
          type="password"
          id="passwordRepeat"
          name="passwordRepeat"
          value={passwordRepeat}
          onChange={changeValue}
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="phone">Telefon:</label>
        </div>
        <Input
          type="phone"
          id="phone"
          name="phone"
          value={phone}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="usernameGh">Github username:</label>
        </div>
        <Input
          type="text"
          id="usernameGh"
          name="usernameGh"
          value={usernameGh}
          onChange={changeValue}
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="aboutMe">O mnie:</label>
        </div>
        <Textarea
          id="aboutMe"
          name="aboutMe"
          value={aboutMe}
          onChange={changeValue}
        />
      </InputWrapper>
    </Wrapper>
  );
};
