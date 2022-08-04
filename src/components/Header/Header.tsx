import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {Role} from '../../types/enums/Role';
import {StudentUserNav} from './UserNav/StudentUserNav';
import {HrUserNav} from './UserNav/HrUserNav';
import {AdminUserNav} from './UserNav/AdminUserNav';

export const Header = () => {
  const {role} = useSelector((store: RootState) => store.auth);
  return (
    <>
      <HeaderBackground />
      <Container>
        <Link to={`/${role}`} className="z-index">
          <Logo src={logo} />
        </Link>
        {role === Role.STUDENT && <StudentUserNav />}
        {role === Role.HR && <HrUserNav />}
        {role === Role.ADMIN && <AdminUserNav />}
      </Container>
    </>
  );
};

const Container = styled.header`
  padding: ${(props) => props.theme.paddingSize.base};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .z-index {
    z-index: 2;
  }
`;

const Logo = styled.img`
  height: 2rem;

  @media only screen and (max-width: 600px) {
    height: 1.5rem;
  }
`;

const HeaderBackground = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 4.3rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};

  @media only screen and (max-width: 600px) {
    height: 4.1rem;
  }
`;
