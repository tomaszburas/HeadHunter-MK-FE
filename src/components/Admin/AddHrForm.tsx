import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';

export const AddHrForm = () => {
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
          <label htmlFor="email">Email:</label>
        </div>
        <Input type="text" id="email" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="company">Firma:</label>
        </div>
        <Input type="text" id="company" />
      </InputWrapper>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="maxStudents">Liczba osób do rezerwacji:</label>
        </div>
        <Input type="number" id="maxStudents" />
      </InputWrapper>
      <div className="btn-box">
        <Button text="Zapisz" type="submit" />
      </div>
    </FormAccount>
  );
};
