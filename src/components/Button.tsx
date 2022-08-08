import {ReactNode} from 'react';
import styled from 'styled-components';
import {MiniLoader} from './MiniLoader';

interface Props {
  text: string | ReactNode;
  type?: 'button' | 'submit' | 'reset';
  load?: boolean;
}

export const Button = ({text, load, type = 'button'}: Props) => {
  return (
    <Btn type={type} disabled={load}>
      {load ? <MiniLoader /> : text}
    </Btn>
  );
};

const Btn = styled.button`
  width: 100%;
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.sm};
  border: none;
  cursor: pointer;
`;
