import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import {Logo} from '../assets/styled/Logo';

export const MainPage = () => {
  return (
    <Container>
      <div className="box">
        <Logo src={logo} className="margin-bottom-lg" />
        <Link to="/admin/login" className="btn-box">
          <Button text="Admin" />
        </Link>
        <Link to="/hr/login" className="btn-box">
          <Button text="Hr" />
        </Link>
        <Link to="/student/login" className="btn-box">
          <Button text="Kursant" />
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.paddingSize.lg} 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .margin-bottom-lg {
    margin-bottom: ${(props) => props.theme.marginSize.lg};
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    .btn-box:not(:last-child) {
      margin-bottom: ${(props) => props.theme.marginSize.sm};
    }

    .btn-box {
      width: 100%;
    }
  }
`;
