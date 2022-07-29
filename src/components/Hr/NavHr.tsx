import React from 'react';
import styled from 'styled-components';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {NavLink} from 'react-router-dom';

interface Props {
  activeLink: NavigationHr;
}

export const NavHr = ({activeLink}: Props) => {
  return (
    <Nav>
      <ul>
        <NavLink to="/hr/available" className="nav-link">
          <li
            className={
              activeLink === NavigationHr.AVAILABLE_STUDENTS ? 'active' : ''
            }
          >
            {NavigationHr.AVAILABLE_STUDENTS}
          </li>
        </NavLink>
        <NavLink to="/hr/to-talk" className="nav-link">
          <li
            className={
              activeLink === NavigationHr.TO_TALK_STUDENTS ? 'active' : ''
            }
          >
            {NavigationHr.TO_TALK_STUDENTS}
          </li>
        </NavLink>
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

  .nav-link {
    display: flex;
  }

  .nav-link:not(:first-child) {
    margin-left: calc(2 * ${(props) => props.theme.marginSize.base});
  }

  li {
    cursor: pointer;
    position: relative;
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
