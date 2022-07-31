import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Input} from '../../assets/styled/Input';
import {Button} from '../Button';

export const AddStudentsForm = () => {
  return (
    <FormAccount>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="file">Plik CSV:</label>
        </div>
        <Input type="file" id="file" />
      </InputWrapper>
      <div className="btn-box">
        <Button text="Zapisz" type="submit" />
      </div>
    </FormAccount>
  );
};
