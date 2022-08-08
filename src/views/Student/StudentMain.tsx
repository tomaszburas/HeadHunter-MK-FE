import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout} from '../../utils/handleLogout';
import {RootState} from '../../redux';
import {useEffect, useState} from 'react';
import {checkGithub} from '../../utils/checkGithub';
import defaultAvatar from '../../assets/images/avatar.png';

export const StudentMain = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, githubUsername} = useSelector(
    (store: RootState) => store.student
  );
  const [isAvatar, setIsAvatar] = useState(false);

  useEffect(() => {
    (async () => {
      if (githubUsername !== '') {
        await checkGithub(githubUsername, setIsAvatar);
      }
    })();
  }, [githubUsername]);

  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <h1>
            Cześć {firstName} {lastName} 👋
          </h1>
          <img
            src={
              isAvatar
                ? `https://github.com/${githubUsername}.png`
                : defaultAvatar
            }
            alt="avatar"
          />
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
      border-radius: 50%;
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
