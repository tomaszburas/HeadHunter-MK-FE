import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout} from '../../utils/handleLogout';
import {RootState} from '../../redux';
import {useEffect, useState} from 'react';
import {checkGithub} from '../../utils/checkGithub';
import defaultAvatar from '../../assets/images/avatar.png';
import {MiniLoader} from '../../components/MiniLoader';
import {API_URL} from '../../config';
import {toast} from 'react-toastify';
import {setAuth} from '../../redux/features/authSlice';

export const StudentMain = () => {
  const dispatch = useDispatch();
  const {firstName, lastName, githubUsername} = useSelector(
    (store: RootState) => store.student
  );
  const [isAvatar, setIsAvatar] = useState<null | boolean>(null);
  const [load, setLoad] = useState(false);
  const [hiredPopup, setHiredPopup] = useState(false);
  const {id} = useSelector((store: RootState) => store.student);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (githubUsername !== '') {
        await checkGithub(githubUsername, setIsAvatar);
      } else {
        setIsAvatar(false);
      }
    })();
  }, [githubUsername]);

  const handleHiredPopup = async () => {
    setLoad(true);
    const res = await fetch(`${API_URL}/user/hired/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Gratulujemy znalezienia pracy 🎉 Zostałeś wylogowany');

      dispatch(
        setAuth({
          isAuth: false,
          role: null,
          id: null,
        })
      );
      navigate('/', {replace: true});
    } else {
      toast.error(data.message);
    }
    setLoad(false);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <h1>
            Cześć {firstName} {lastName} 👋
          </h1>

          {isAvatar === null ? (
            <div className="loader-box">
              <MiniLoader height={40} width={40} />
            </div>
          ) : (
            <img
              src={
                isAvatar
                  ? `https://github.com/${githubUsername}.png`
                  : defaultAvatar
              }
              alt="avatar"
            />
          )}

          <Link to="/student/account-edit" className="btn-box">
            <Button text="Edytuj konto" />
          </Link>
          <div className="btn-box">
            <Button text="Zatrudniony 🔥" onClick={() => setHiredPopup(true)} />
          </div>
          <Link
            to="/"
            onClick={() => handleLogout(dispatch)}
            className="btn-box"
          >
            <Button text="Wyloguj" />
          </Link>
        </div>
      </Container>
      {hiredPopup && (
        <HiredPopup>
          <div className="bg" onClick={() => setHiredPopup(false)} />
          <div className="popup">
            <p className="title">
              Potwierdź swoje zatrudnienie. Twoje konto od tej chwili będzie
              dezaktywowane.
            </p>
            <div className="btn-box">
              {load ? (
                <MiniLoader width={22} height={22} />
              ) : (
                <>
                  <button className="hired" onClick={handleHiredPopup}>
                    Zatrudniony
                  </button>
                  <button
                    className="no-hired"
                    onClick={() => setHiredPopup(false)}
                  >
                    Nie zatrudniony
                  </button>
                </>
              )}
            </div>
          </div>
        </HiredPopup>
      )}
    </>
  );
};

const HiredPopup = styled.div`
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(34, 35, 36, 0.8);
    backdrop-filter: blur(4px);
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.black};
    padding: ${(props) => props.theme.paddingSize.base};
    z-index: 11;
    color: ${(props) => props.theme.colors.white};
    max-height: 80vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-bottom: ${(props) => props.theme.marginSize.base};
    }

    .btn-box {
      button {
        color: ${(props) => props.theme.colors.white};
        padding: ${(props) => props.theme.paddingSize.sm};
        border: none;
        cursor: pointer;
      }

      .hired {
        background-color: ${(props) => props.theme.colors.red};
        margin-right: ${(props) => props.theme.marginSize.base};
      }

      .no-hired {
        background-color: ${(props) => props.theme.colors.darkBlue};
      }
    }
  }
`;

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

    .loader-box {
      padding: ${(props) => props.theme.paddingSize.base} 0;
    }

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
