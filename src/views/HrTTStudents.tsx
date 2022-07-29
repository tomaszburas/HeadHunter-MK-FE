import {Header} from '../components/Header';
import {NavHr} from '../components/Hr/NavHr';
import {NavigationHr} from '../types/enums/NavigationHr';
import {UtilsHr} from '../components/Hr/UtilsHr';
import {Pagination} from '../components/Hr/Pagination';
import React from 'react';
import {ToTalkStudents} from '../components/Hr/ToTalkStudents/ToTalkStudents';
import {WrapperHr} from '../assets/styled/Hr/WrapperHr';

export const HrTTStudents = () => {
  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.TO_TALK_STUDENTS} />
        <UtilsHr />
        <ToTalkStudents />
      </WrapperHr>
      <Pagination />
    </>
  );
};
