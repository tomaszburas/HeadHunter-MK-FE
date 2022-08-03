import {Header} from '../../components/Header/Header';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';
import styled from 'styled-components';

export const AdminMain = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <h1>Cześć admin 👋</h1>
          <Link to="/admin/account-edit" className="btn-box">
            <Button text="Edytuj konto" />
          </Link>
          <Link to="/admin/add-students" className="btn-box">
            <Button text="Dodaj kursantów" />
          </Link>
          <Link to="/admin/add-hr" className="btn-box">
            <Button text="Dodaj hr" />
          </Link>
          <Link to="/admin/logout" className="btn-box">
            <Button text="Wyloguj" />
          </Link>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.paddingSize.lg} 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    h1 {
      margin-bottom: ${(props) => props.theme.marginSize.base};
    }

    .btn-box:not(:last-child) {
      margin-bottom: ${(props) => props.theme.marginSize.sm};
    }

    .btn-box {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .box {
      width: 70%;
    }
  }
`;
