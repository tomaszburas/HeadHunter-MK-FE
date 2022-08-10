import {useEffect, useState} from 'react';
import {Button} from '../../Button';
import {StudentInfo} from '../StudentInfo';
import styled from 'styled-components';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import {Link} from 'react-router-dom';
import defaultAvatar from '../../../assets/images/avatar.png';
import {API_URL} from '../../../config';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {StudentState} from '../../../redux/features/studentSlice';
import {toast} from 'react-toastify';
import {AllAvailableUsers} from '../../../types/interfaces/Student/EmploymentInterface';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  addedDate: Date;
  user?: AllAvailableUsers;
  setStudents: any;
}

export const ToTalkStudent = ({
  addedDate,
  githubUsername,
  firstName,
  lastName,
  id,
  setStudents,
  user,
}: User) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {id: hrId} = useSelector((store: RootState) => store.auth);
  const [dateState, setDate] = useState<string>('');

  useEffect(() => {
    const date = addedDate.toString().split('-');
    const day = date[2].split('T')[0];
    const expiredDate = new Date(Number(date[0]), Number(date[1]), +day + 10);
    setDate(expiredDate.toLocaleDateString());
  }, [dateState]);

  const handleRemoveStudent = async () => {
    const res = await fetch(`${API_URL}/hr/not-interested/${hrId}/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      setStudents((prev: StudentState[]) => {
        console.log(prev);
        return [...prev].filter((el) => el.id !== id);
      });
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="student-info">
          <div className="student-reservation">
            <p className="student-reservation-title">Rezerwacja do:</p>
            <p className="student-reservation-date">{dateState}</p>
          </div>
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
              <Button text="Pokaż CV"/>
            </Link>
            <div className="btn-container">
              <Button
                  text="Brak zainteresowania"
                  onClick={handleRemoveStudent}
              />
            </div>
            <Button text="Zatrudniony"/>
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
    </>
  );
};

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
