import React from 'react';
import styled from 'styled-components';
import {TailSpin} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

export const MiniLoader = ({color, height, width}: Props) => {
  return (
    <Container>
      <TailSpin
        height={height ? height : '17'}
        width={width ? width : '17'}
        color={color ? color : '#b0b0b0'}
        ariaLabel="loading"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
