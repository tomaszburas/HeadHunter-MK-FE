import {Textarea} from '../../../assets/styled/Textarea';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';

interface Props {
  state: string;
  setState: (param: string) => void;
}

export const Education = ({state, setState}: Props) => {
  return (
    <Wrapper>
      <Title>Edukacja</Title>
      <InputWrapper>
        <Textarea value={state} onChange={(e) => setState(e.target.value)} />
      </InputWrapper>
    </Wrapper>
  );
};
