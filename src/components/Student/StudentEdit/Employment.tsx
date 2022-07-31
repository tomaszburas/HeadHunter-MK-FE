import {Select} from '../../../assets/styled/Select';
import {Workplace} from '../../../types/enums/Workplace';
import {Contract} from '../../../types/enums/Contract';
import {Input} from '../../../assets/styled/Input';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';
import {Internships} from '../../../types/enums/Internships';
import {EmploymentInterface} from '../../../types/StudentEditInterfaces/EmploymentInterface';
import {ChangeEvent} from 'react';

interface Props {
  state: EmploymentInterface;
  setState: (param: EmploymentInterface) => void;
}

export const Employment = ({state, setState}: Props) => {
  const {workplace, contract, experience, city, salary} = state;

  const changeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = {...state};
    setState({...value, [`${e.target.name}`]: e.target.value});
  };

  return (
    <Wrapper>
      <Title>Oczekiwania w stosunku do zatrudnienia</Title>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="workplace">Preferowane miejsce pracy:</label>
        </div>
        <Select
          id="workplace"
          name="workplace"
          value={workplace}
          onChange={changeValue}
        >
          <option value={Workplace.OFFICE}>{Workplace.OFFICE}</option>
          <option value={Workplace.REMOTE}>{Workplace.REMOTE}</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="contract">Oczekiwany typ kontraktu:</label>
        </div>
        <Select
          id="contract"
          name="contract"
          value={contract}
          onChange={changeValue}
        >
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
        <Input
          type="number"
          id="experience"
          name="experience"
          value={experience}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="city">
            Docelowe miasto gdzie chce pracować kandydat:
          </label>
        </div>
        <Input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="salary">
            Oczekiwane miesięczne wynagrodzenie netto:
          </label>
        </div>
        <Input
          type="number"
          id="salary"
          name="salary"
          value={salary}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek:</p>
        </div>
        <div className="input-box">
          <div className="box">
            <input
              type="radio"
              id={Internships.YES}
              value={Internships.YES}
              onChange={changeValue}
              name="internships"
              required
            />
            <label htmlFor={Internships.YES}>{Internships.YES}</label>
          </div>
          <div className="box">
            <input
              type="radio"
              id={Internships.NO}
              value={Internships.NO}
              onChange={changeValue}
              name="internships"
              required
            />
            <label htmlFor={Internships.NO}>{Internships.NO}</label>
          </div>
        </div>
      </InputWrapper>
    </Wrapper>
  );
};
