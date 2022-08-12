import {useState} from 'react';
import {Button} from '../../Button';
import {StudentInfo} from '../StudentInfo';
import styled from 'styled-components';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import {Link, useNavigate} from 'react-router-dom';
import defaultAvatar from '../../../assets/images/avatar.png';
import {API_URL} from '../../../config';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {StudentState} from '../../../redux/features/studentSlice';
import {toast} from 'react-toastify';
import {AllAvailableUsers} from '../../../types/interfaces/Student/EmploymentInterface';
import {MiniLoader} from '../../MiniLoader';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  // addedDate: Date;
  user?: AllAvailableUsers;
  setStudents: any;
  setMovedStudent: (value: (prev: boolean) => boolean) => void;
}

export const ToTalkStudent = ({
  // addedDate,
  githubUsername,
  firstName,
  lastName,
  id,
  setStudents,
  user,
  setMovedStudent,
}: User) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {id: hrId} = useSelector((store: RootState) => store.auth);
  const [load, setLoad] = useState(false);
  const [hiredPopup, setHiredPopup] = useState(false);
  const navigate = useNavigate();

  const handleRemoveStudent = async () => {
    const res = await fetch(`${API_URL}/hr/not-interested/${hrId}/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      setStudents((prev: StudentState[]) => {
        return [...prev].filter((el) => el.id !== id);
      });
      setMovedStudent((prev: boolean) => !prev);
    } else {
      toast.error(data.message);
    }
  };

  const handleHiredPopup = async () => {
    setLoad(true);
    const res = await fetch(`${API_URL}/hr/hired/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      navigate('/hr/to-talk', {replace: true});
    } else {
      toast.error(data.message);
    }

    setMovedStudent((prev: boolean) => !prev);
    setHiredPopup(false);
    setLoad(false);
  };

  return (
    <>
      <Wrapper>
        <div className="student-info">
          {/*<div className="student-reservation">*/}
          {/*  <p className="student-reservation-title">Rezerwacja do:</p>*/}
          {/*  <p className="student-reservation-date">{dateState}</p>*/}
          {/*</div>*/}
          <div className="student-data">
            <img
              src={
                githubUsername !== ''
                  ? (`https://github.com/${githubUsername}.png` as string)
                  : defaultAvatar
              }
              alt="avatar"
              className="student-img"
            />
            <p className="student-name">{`${firstName} ${lastName}`}</p>
          </div>
        </div>
        <div className="student-nav">
          <div className="student-nav-buttons">
            <Link to={`/hr/cv/${id}`}>
              <Button text="Pokaż CV" />
            </Link>
            <div className="btn-container">
              <Button
                text="Brak zainteresowania"
                onClick={handleRemoveStudent}
              />
            </div>
            <Button text="Zatrudniony" onClick={() => setHiredPopup(true)} />
          </div>
          {!isOpen ? (
            <i
              className="bx bx-chevron-down"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <i
              className="bx bx-chevron-up"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </Wrapper>
      <StudentInfo isOpen={isOpen} user={user as AllAvailableUsers} />
      <UnderlineHr />
      {hiredPopup && (
        <HiredPopup>
          <div className="bg" onClick={() => setHiredPopup(false)} />
          <div className="popup">
            <p className="title">
              Potwierdź zatrudnienie. Konto {firstName} {lastName} od tej chwili
              będzie dezaktywowane.
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.paddingSize.base} 0;

  button {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  .student-info {
    display: flex;

    .student-reservation {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: ${(props) => props.theme.marginSize.xl};

      .student-reservation-date {
        color: ${(props) => props.theme.colors.white};
        margin-top: ${(props) => props.theme.marginSize.sm};
      }
    }

    .student-data {
      display: flex;
      align-items: center;

      .student-img {
        height: 2rem;
        border-radius: 50%;
      }

      .student-name {
        padding-left: ${(props) => props.theme.paddingSize.sm};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  .student-nav {
    display: flex;
    align-items: center;

    .student-nav-buttons {
      display: flex;

      .btn-container {
        margin: 0 ${(props) => props.theme.marginSize.base};
      }
    }

    .bx-chevron-up,
    .bx-chevron-down {
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.base};
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 750px) {
    .student-nav {
      margin-left: ${(props) => props.theme.marginSize.sm};
      .student-nav-buttons {
        flex-direction: column;

        .btn-container {
          margin: ${(props) => props.theme.marginSize.sm} 0;
        }
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .student-info {
      flex-direction: column-reverse;

      .student-reservation {
        align-items: flex-start;
        margin-right: 0;
        margin-top: ${(props) => props.theme.marginSize.base};

        .student-reservation-date {
          margin-top: ${(props) => props.theme.marginSize.m};
        }
      }
    }
  }
`;
