import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

export const Button = ({text}: Props) => {
  return <Btn type="submit">{text}</Btn>;
};

const Btn = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.sm};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
