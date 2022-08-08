import {Select} from '../../../assets/styled/Select';
import {WorkType} from '../../../types/enums/WorkType';
import {ContractType} from '../../../types/enums/ContractType';
import {Input} from '../../../assets/styled/Input';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';
import {EmploymentInterface} from '../../../types/interfaces/Student/EmploymentInterface';
import {ChangeEvent} from 'react';
import {Internships} from '../../../types/enums/Internships';

interface Props {
  state: EmploymentInterface;
  setState: (param: EmploymentInterface) => void;
  internships: Internships;
  setInternships: (param: Internships) => void;
}

export const Employment = ({
  state,
  setState,
  internships,
  setInternships,
}: Props) => {
  const {
    expectedTypeWork,
    expectedContractType,
    monthsOfCommercialExp,
    targetWorkCity,
    expectedSalary,
  } = state;

  const changeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = {...state};
    console.log(e.target.value);
    setState({...value, [`${e.target.name}`]: e.target.value});
  };

  return (
    <Wrapper>
      <Title>Oczekiwania w stosunku do zatrudnienia</Title>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="expectedTypeWork">Preferowane miejsce pracy*:</label>
        </div>
        <Select
          id="expectedTypeWork"
          name="expectedTypeWork"
          value={expectedTypeWork}
          onChange={changeValue}
          required
        >
          <option value={WorkType.WHATEVER}>{WorkType.WHATEVER}</option>
          <option value={WorkType.REMOTE}>{WorkType.REMOTE}</option>
          <option value={WorkType.STAY}>{WorkType.STAY}</option>
          <option value={WorkType.MOVE}>{WorkType.MOVE}</option>
          <option value={WorkType.HYBRID}>{WorkType.HYBRID}</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="expectedContractType">
            Oczekiwany typ kontraktu*:
          </label>
        </div>
        <Select
          id="expectedContractType"
          name="expectedContractType"
          value={expectedContractType}
          onChange={changeValue}
          required
        >
          <option value={ContractType.WHATEVER}>{ContractType.WHATEVER}</option>
          <option value={ContractType.UOP}>{ContractType.UOP}</option>
          <option value={ContractType.B2B}>{ContractType.B2B}</option>
          <option value={ContractType.UZ}>{ContractType.UZ}</option>
          <option value={ContractType.UOD}>{ContractType.UOD}</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="monthsOfCommercialExp">
            Doświadczenie komercyjne w programowaniu (miesiące)*:
          </label>
        </div>
        <Input
          type="number"
          id="monthsOfCommercialExp"
          name="monthsOfCommercialExp"
          value={monthsOfCommercialExp}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="targetWorkCity">
            Docelowe miasto gdzie chce pracować kandydat*:
          </label>
        </div>
        <Input
          type="text"
          id="targetWorkCity"
          name="targetWorkCity"
          value={targetWorkCity}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="expectedSalary">
            Oczekiwane miesięczne wynagrodzenie netto*:
          </label>
        </div>
        <Input
          type="number"
          id="expectedSalary"
          name="expectedSalary"
          value={expectedSalary}
          onChange={changeValue}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek*:</p>
        </div>
        <div className="input-box">
          <div className="box">
            <input
              type="radio"
              id="yes"
              value={Internships.YES}
              onChange={(e) => setInternships(Number(e.target.value))}
              name="canTakeApprenticeship"
              checked={internships === Internships.YES}
              required
            />
            <label htmlFor="yes">Tak</label>
          </div>
          <div className="box">
            <input
              type="radio"
              id="no"
              value={Internships.NO}
              onChange={(e) => setInternships(Number(e.target.value))}
              name="canTakeApprenticeship"
              checked={internships === Internships.NO}
              required
            />
            <label htmlFor="no">Nie</label>
          </div>
        </div>
      </InputWrapper>
    </Wrapper>
  );
};
