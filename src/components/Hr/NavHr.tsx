import React from 'react';
import styled from 'styled-components';
import {NavigationHr} from '../../types/enums/NavigationHr';

interface Props {
  activeLink: NavigationHr;
  setActiveLink: (param: NavigationHr) => void;
}

export const NavHr = ({activeLink, setActiveLink}: Props) => {
  return (
    <Nav>
      <ul>
        <li
          className={
            activeLink === NavigationHr.AVAILABLE_STUDENTS ? 'active' : ''
          }
          onClick={() => setActiveLink(NavigationHr.AVAILABLE_STUDENTS)}
        >
          {NavigationHr.AVAILABLE_STUDENTS}
        </li>
        <li
          className={activeLink === NavigationHr.TO_TALK ? 'active' : ''}
          onClick={() => setActiveLink(NavigationHr.TO_TALK)}
        >
          {NavigationHr.TO_TALK}
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: ${(props) => props.theme.paddingSize.base};
  border-bottom: solid 2px ${(props) => props.theme.colors.background};

  ul {
    display: flex;
  }

  li {
    cursor: pointer;
    position: relative;
  }

  li:not(:first-child) {
    margin-left: calc(2 * ${(props) => props.theme.marginSize.base});
  }

  .active {
    color: ${(props) => props.theme.colors.white};
  }

  .active:before {
    content: '';
    position: absolute;
    width: calc(100% + 2 * ${(props) => props.theme.marginSize.base});
    top: 100%;
    left: -${(props) => props.theme.marginSize.base};
    padding-bottom: ${(props) => props.theme.marginSize.base};
    border-bottom: solid 2px ${(props) => props.theme.colors.red};
  }
`;
