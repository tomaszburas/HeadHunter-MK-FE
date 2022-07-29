import React from 'react';
import {Header} from '../components/Header';
import {NavHr} from '../components/Hr/NavHr';
import {AvailableStudents} from '../components/Hr/AvailableStudents/AvailableStudents';
import {UtilsHr} from '../components/Hr/UtilsHr';
import {Pagination} from '../components/Hr/Pagination';
import {NavigationHr} from '../types/enums/NavigationHr';
import {WrapperHr} from '../assets/styled/Hr/WrapperHr';

export const HrAvailableStudents = () => {
  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr />
        <AvailableStudents />
      </WrapperHr>
      <Pagination />
    </>
  );
};
