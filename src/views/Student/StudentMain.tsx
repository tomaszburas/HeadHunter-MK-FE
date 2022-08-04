import {Header} from '../../components/Header/Header';
import avatar from '../../assets/images/avatar.png';
import {Button} from '../../components/Button';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {handleLogout} from '../../utils/handleLogout';

export const StudentMain = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <h1>Cześć Jan Kowalski 👋</h1>
          <img src={avatar} alt="avatar" />
          <Link to="/student/account-edit" className="btn-box">
            <Button text="Edytuj konto" />
          </Link>
          <Link to="/student/hired" className="btn-box">
            <Button text="Zatrudniony 🔥" />
          </Link>
          <Link
            to="/"
            onClick={() => handleLogout(dispatch)}
            className="btn-box"
          >
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

    img {
      width: 60%;
      max-width: 200px;
      margin: ${(props) => props.theme.marginSize.base} 0;
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
