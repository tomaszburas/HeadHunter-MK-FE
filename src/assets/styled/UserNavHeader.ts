import styled from 'styled-components';

export const UserNav = styled.div`
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

export const MenuNav = styled.div`
  position: absolute;
  width: fit-content;
  top: 130%;
  right: 0;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.base};
  font-size: ${(props) => props.theme.fontSize.sm};
  border-radius: 0.5rem;

  li {
    cursor: pointer;
    white-space: nowrap;
  }

  .margin-bottom {
    margin-bottom: ${(props) => props.theme.marginSize.sm};
  }
`;

export const Avatar = styled.img`
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-right: ${(props) => props.theme.marginSize.base};

  @media only screen and (max-width: 600px) {
    margin-right: ${(props) => props.theme.marginSize.sm};
  }
`;

export const Name = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-right: ${(props) => props.theme.marginSize.base};
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightGray};

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
