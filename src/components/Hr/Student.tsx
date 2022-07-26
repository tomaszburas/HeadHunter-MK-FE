import styled from 'styled-components';
import {Button} from '../Button';
import React from 'react';

export const Student = () => {
  return (
    <Container>
      <p className="student-name">Jan K.</p>
      <div className="student-nav">
        <Button text="Zarezerwuj rozmowę" />
        <i className="bx bx-chevron-down" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid ${(props) => props.theme.paddingSize.sm}
    ${(props) => props.theme.colors.background};
  padding-bottom: ${(props) => props.theme.paddingSize.sm};
  margin-bottom: ${(props) => props.theme.marginSize.sm};

  button {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  .student-name {
    padding-left: ${(props) => props.theme.paddingSize.sm};
  }

  .student-nav {
    display: flex;
    align-items: center;

    .bx-chevron-down {
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.base};
      cursor: pointer;
    }
  }
`;
