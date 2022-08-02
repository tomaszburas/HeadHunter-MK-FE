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

export const About = ({state, setState}: Props) => {
  const {
    bio,
    email,
    firstName,
    lastName,
    password,
    passwordRepeat,
    tel,
    githubUsername,
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
          <label htmlFor="firstName">Imię:</label>
        </div>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="lastName">Nazwisko:</label>
        </div>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
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
          <label htmlFor="tel">Telefon:</label>
        </div>
        <Input
          type="phone"
          id="tel"
          name="tel"
          value={tel}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="githubUsername">Github username:</label>
        </div>
        <Input
          type="text"
          id="githubUsername"
          name="githubUsername"
          value={githubUsername}
          onChange={changeValue}
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="bio">O mnie:</label>
        </div>
        <Textarea id="bio" name="bio" value={bio} onChange={changeValue} />
      </InputWrapper>
    </Wrapper>
  );
};
