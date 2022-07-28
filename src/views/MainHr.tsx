import React, {useState} from 'react';
import styled from 'styled-components';
import {Header} from '../components/Header';
import {NavHr} from '../components/Hr/NavHr';
import {Students} from '../components/Hr/Students';
import {UtilsHr} from '../components/Hr/UtilsHr';
import {Pagination} from '../components/Hr/Pagination';
import {NavigationHr} from '../types/enums/NavigationHr';

export const MainHr = () => {
  const [activeLink, setActiveLink] = useState(NavigationHr.AVAILABLE_STUDENTS);

  return (
    <>
      <Header />
      <Wrapper>
        <NavHr activeLink={activeLink} setActiveLink={setActiveLink} />
        <UtilsHr />
        <Students />
      </Wrapper>
      <Pagination />
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: ${(props) => props.theme.marginSize.base} 0;
`;
