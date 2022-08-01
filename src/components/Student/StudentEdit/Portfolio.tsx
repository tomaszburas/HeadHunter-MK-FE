import {Input} from '../../../assets/styled/Input';
import {
  handleAddLink,
  handleInputChange,
  handleRemoveLink,
} from '../../../utils/linkHandlers';
import {Wrapper} from '../../../assets/styled/StudentAccountEdit/Wrapper';
import {Title} from '../../../assets/styled/StudentAccountEdit/Title';
import {InputWrapper} from '../../../assets/styled/StudentAccountEdit/InputContainer';

interface Props {
  state: string[];
  setState: (param: string[]) => void;
}

export const Portfolio = ({state, setState}: Props) => {
  return (
    <Wrapper>
      <Title>Portfolio</Title>
      {state.map((link, index) => {
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
                onChange={(e) => handleInputChange(index, e, state, setState)}
              />
              {state.length === index + 1 && (
                <button
                  className="add-link"
                  onClick={() => handleAddLink(state, setState)}
                >
                  +
                </button>
              )}
              {state.length > 1 && state.length === index + 1 && (
                <button
                  className="remove-link"
                  onClick={() => handleRemoveLink(index, state, setState)}
                >
                  -
                </button>
              )}
            </div>
          </InputWrapper>
        );
      })}
    </Wrapper>
  );
};
