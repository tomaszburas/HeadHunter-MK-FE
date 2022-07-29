import React, {useState} from 'react';
import styled from 'styled-components';
import {Header} from '../components/Header';
import {Input} from '../assets/styled/Input';
import {Textarea} from '../assets/styled/Textarea';
import {Select} from '../assets/styled/Select';
import {Button} from '../components/Button';
import {Workplace} from '../types/enums/Workplace';
import {Contract} from '../types/enums/Contract';
import {
  handleAddLink,
  handleInputChange,
  handleRemoveLink,
} from '../handlers/linkHandlers';

export const StudentEdit = () => {
  const [linkPortfolio, setLinkPortfolio] = useState<string[]>(['']);
  const [linkScrum, setLinkScrum] = useState<string[]>(['']);
  const [linkProject, setLinkProject] = useState<string[]>(['']);

  return (
    <Form>
      <Header />
      {/*About*/}
      <Wrapper>
        <Title>O mnie</Title>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="fullname">Imię i nazwisko:</label>
          </div>
          <Input type="text" id="fullname" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="phone">Telefon:</label>
          </div>
          <Input type="phone" id="phone" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="email">Email:</label>
          </div>
          <Input type="email" id="email" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="password">Hasło:</label>
          </div>
          <Input type="password" id="password" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="passwordRepeat">Powtórz hasło:</label>
          </div>
          <Input type="password" id="passwordRepeat" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="usernameGh">Github username:</label>
          </div>
          <Input type="text" id="usernameGh" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="about">O mnie:</label>
          </div>
          <Textarea id="about" />
        </InputWrapper>
      </Wrapper>

      {/*Employment*/}
      <Wrapper>
        <Title>Oczekiwania w stosunku do zatrudnienia</Title>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="workplace">Preferowane miejsce pracy:</label>
          </div>
          <Select id="workplace">
            <option value={Workplace.OFFICE}>{Workplace.OFFICE}</option>
            <option value={Workplace.REMOTE}>{Workplace.REMOTE}</option>
          </Select>
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="contract">Oczekiwany typ kontraktu:</label>
          </div>
          <Select id="contract">
            <option value={Contract.PERMANENT}>{Contract.PERMANENT}</option>
            <option value={Contract.CONTRACT_WORK}>
              {Contract.CONTRACT_WORK}
            </option>
            <option value={Contract.B2B}>{Contract.B2B}</option>
          </Select>
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="experience">
              Doświadczenie komercyjne w programowaniu (miesiące):
            </label>
          </div>
          <Input type="number" id="experience" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="city">
              Docelowe miasto gdzie chce pracować kandydat:
            </label>
          </div>
          <Input type="text" id="city" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <label htmlFor="salary">
              Oczekiwane miesięczne wynagrodzenie netto:
            </label>
          </div>
          <Input type="number" id="salary" />
        </InputWrapper>
        <InputWrapper>
          <div className="label-box">
            <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek:</p>
          </div>
          <div className="input-box">
            <div className="box">
              <input type="radio" id="yes" value="yes" name="internships" />
              <label htmlFor="yes">Tak</label>
            </div>
            <div className="box">
              <input type="radio" id="no" value="no" name="internships" />
              <label htmlFor="no">Nie</label>
            </div>
          </div>
        </InputWrapper>
      </Wrapper>

      {/*Education*/}
      <Wrapper>
        <Title>Edukacja</Title>
        <InputWrapper>
          <Textarea />
        </InputWrapper>
      </Wrapper>

      {/*Courses*/}
      <Wrapper>
        <Title>Kursy</Title>
        <InputWrapper>
          <Textarea />
        </InputWrapper>
      </Wrapper>

      {/*Experience*/}
      <Wrapper>
        <Title>Doświadczenie zawodowe</Title>
        <InputWrapper>
          <Textarea />
        </InputWrapper>
      </Wrapper>

      {/*Portfolio*/}
      <Wrapper>
        <Title>Portfolio</Title>
        {linkPortfolio.map((link, index) => {
          return (
            <InputWrapper key={index}>
              <div className="label-box">
                <label htmlFor={`p-link${index}`}>
                  {index === 0 ? `Link:` : `Link ${index + 1}:`}
                </label>
              </div>
              <div className="input-box">
                <Input
                  type="text"
                  id={`p-link${index}`}
                  value={link}
                  onChange={(e) =>
                    handleInputChange(index, e, linkPortfolio, setLinkPortfolio)
                  }
                />
                {linkPortfolio.length === index + 1 && (
                  <button
                    className="add-link"
                    onClick={() =>
                      handleAddLink(linkPortfolio, setLinkPortfolio)
                    }
                  >
                    +
                  </button>
                )}
                {linkPortfolio.length > 1 &&
                  linkPortfolio.length === index + 1 && (
                    <button
                      className="remove-link"
                      onClick={() =>
                        handleRemoveLink(index, linkPortfolio, setLinkPortfolio)
                      }
                    >
                      -
                    </button>
                  )}
              </div>
            </InputWrapper>
          );
        })}
      </Wrapper>

      {/*Scrum*/}
      <Wrapper>
        <Title>Projekt w zespole scrumowym</Title>
        {linkScrum.map((link, index) => {
          return (
            <InputWrapper key={index}>
              <div className="label-box">
                <label htmlFor={`s-link${index}`}>
                  {index === 0 ? `Link:` : `Link ${index + 1}:`}
                </label>
              </div>
              <div className="input-box">
                <Input
                  type="text"
                  id={`s-link${index}`}
                  value={link}
                  onChange={(e) =>
                    handleInputChange(index, e, linkScrum, setLinkScrum)
                  }
                />
                {linkScrum.length === index + 1 && (
                  <button
                    className="add-link"
                    onClick={() => handleAddLink(linkScrum, setLinkScrum)}
                  >
                    +
                  </button>
                )}
                {linkScrum.length > 1 && linkScrum.length === index + 1 && (
                  <button
                    className="remove-link"
                    onClick={() =>
                      handleRemoveLink(index, linkScrum, setLinkScrum)
                    }
                  >
                    -
                  </button>
                )}
              </div>
            </InputWrapper>
          );
        })}
      </Wrapper>

      {/*Project*/}
      <Wrapper>
        <Title>Projekt na zaliczenie</Title>
        {linkProject.map((link, index) => {
          return (
            <InputWrapper key={index}>
              <div className="label-box">
                <label htmlFor={`pr-link${index}`}>
                  {index === 0 ? `Link:` : `Link ${index + 1}:`}
                </label>
              </div>
              <div className="input-box">
                <Input
                  type="text"
                  id={`pr-link${index}`}
                  value={link}
                  onChange={(e) =>
                    handleInputChange(index, e, linkProject, setLinkProject)
                  }
                />
                {linkProject.length === index + 1 && (
                  <button
                    className="add-link"
                    onClick={() => handleAddLink(linkProject, setLinkProject)}
                  >
                    +
                  </button>
                )}
                {linkProject.length > 1 && linkProject.length === index + 1 && (
                  <button
                    className="remove-link"
                    onClick={() =>
                      handleRemoveLink(index, linkProject, setLinkProject)
                    }
                  >
                    -
                  </button>
                )}
              </div>
            </InputWrapper>
          );
        })}
      </Wrapper>
      <ButtonContainer>
        <Button text="Zapisz" />
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form``;

const Wrapper = styled.div`
  margin: ${(props) => props.theme.marginSize.base} 0;
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.base};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: ${(props) => props.theme.marginSize.lg};
  margin-bottom: ${(props) => props.theme.marginSize.base};
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: ${(props) => props.theme.marginSize.sm} 0;
  display: flex;
  align-items: center;

  .label-box {
    font-size: ${(props) => props.theme.fontSize.sm};
    width: 40%;
    margin-right: 5%;
    padding-left: ${(props) => props.theme.paddingSize.base};
  }

  label {
    cursor: pointer;
  }

  .input-box {
    width: 100%;
    display: flex;

    .box {
      margin-left: ${(props) => props.theme.marginSize.base};

      input {
        transform: scale(1.5);
      }

      label {
        width: auto;
        margin-left: ${(props) => props.theme.marginSize.sm};
        font-size: ${(props) => props.theme.fontSize.sm};
        color: ${(props) => props.theme.colors.white};
      }
    }

    .remove-link,
    .add-link {
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.sm};
      border: none;
      cursor: pointer;
      margin-left: ${(props) => props.theme.marginSize.sm};
    }

    .remove-link {
      padding: 0 calc(${(props) => props.theme.paddingSize.sm} * 1.3);
    }
  }
`;
