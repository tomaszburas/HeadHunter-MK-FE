import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import {Link} from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <HeaderBackground />
      <Container>
        <Link to="/" className="z-index">
          <Logo src={logo} />
        </Link>
        <UserNav>
          <Avatar src={avatar} onClick={toggleMenu} />
          <Name onClick={toggleMenu}>Jan Kowalski</Name>
          {isOpen ? (
            <>
              <i className="bx bxs-up-arrow" onClick={toggleMenu} />
              <MenuNav>
                <ul>
                  <li>Edytuj konto</li>
                  <li>Wyloguj</li>
                </ul>
              </MenuNav>
            </>
          ) : (
            <i className="bx bxs-down-arrow" onClick={toggleMenu} />
          )}
        </UserNav>
      </Container>
    </>
  );
};

const Container = styled.header`
  padding: ${(props) => props.theme.paddingSize.base};
  display: flex;
  justify-content: space-between;

  .z-index {
    z-index: 2;
  }
`;

const UserNav = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  position: relative;

  .bxs-down-arrow,
  .bxs-up-arrow {
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.m};
  }
`;

const MenuNav = styled.div`
  position: absolute;
  width: 100%;
  top: 130%;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.base};
  font-size: ${(props) => props.theme.fontSize.sm};
  border-radius: 0.5rem;

  li {
    cursor: pointer;
  }

  li:not(:last-child) {
    margin-bottom: ${(props) => props.theme.marginSize.sm};
  }
`;

const Logo = styled.img`
  height: 2rem;
`;

const Avatar = styled.img`
  height: 2rem;
  cursor: pointer;
`;

const Name = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: 0 ${(props) => props.theme.marginSize.base};
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightGray};
`;

const HeaderBackground = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 4.4rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.black};
`;
