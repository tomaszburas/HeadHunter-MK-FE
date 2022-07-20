import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import {Link} from 'react-router-dom';

export const Header = () => {
  const [click, setClick] = useState(false);
  const toggleArrow = () => setClick((prev) => !prev);

  return (
    <>
      <HeaderBackground />
      <Container>
        <Link to="/" className="z-index">
          <Logo src={logo} />
        </Link>
        <UserNav onClick={toggleArrow}>
          <Avatar src={avatar} />
          <Name>Jan Kowalski</Name>
          {click ? (
            <i className="bx bxs-up-arrow" />
          ) : (
            <i className="bx bxs-down-arrow" />
          )}
        </UserNav>
      </Container>
    </>
  );
};

const Container = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  .z-index {
    z-index: 2;
  }
`;

const Logo = styled.img`
  height: 2rem;
`;

const UserNav = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  cursor: pointer;

  .bxs-down-arrow,
  .bxs-up-arrow {
    font-size: ${(props) => props.theme.fontSize.m};
  }
`;

const Avatar = styled.img`
  height: 2rem;
`;

const Name = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: 0 1rem;
  white-space: nowrap;
`;

const HeaderBackground = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 4rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.black};
`;
