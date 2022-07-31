import {Textarea} from '../../../assets/styled/Textarea';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';

interface Props {
  state: string;
  setState: (param: string) => void;
}

export const Experience = ({state, setState}: Props) => {
  return (
    <Wrapper>
      <Title>Doświadczenie zawodowe</Title>
      <InputWrapper>
        <Textarea value={state} onChange={(e) => setState(e.target.value)} />
      </InputWrapper>
    </Wrapper>
  );
};
