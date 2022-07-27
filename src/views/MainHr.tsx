import React, {useState} from 'react';
import styled from 'styled-components';
import {Header} from '../components/Header';
import {NavHr} from '../components/Hr/NavHr';
import {Students} from '../components/Hr/Students';
import {UtilsHr} from '../components/Hr/UtilsHr';

export const MainHr = () => {
  const [activeLink, setActiveLink] = useState(true);

  return (
    <>
      <Header />
      <Wrapper>
        <NavHr activeLink={activeLink} setActiveLink={setActiveLink} />
        <UtilsHr />
        <Students />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: ${(props) => props.theme.marginSize.base} 0;
`;
