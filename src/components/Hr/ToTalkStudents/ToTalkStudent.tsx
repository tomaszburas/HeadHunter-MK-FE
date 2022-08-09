import {useState} from 'react';
import {Button} from '../../Button';
import {StudentInfo} from '../StudentInfo';
import styled from 'styled-components';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import {Link} from 'react-router-dom';
import defaultAvatar from "../../../assets/images/avatar.png";
import {API_URL} from "../../../config";
import {useDispatch} from "react-redux";
import {getObject} from "../../../redux/features/usersAddedByHr";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  addedDate: Date;
}

export const ToTalkStudent = ({addedDate, githubUsername, firstName, lastName, id}: User) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const date = addedDate.toString().split('-');
  const day = date[2].split('T')[0];
  const expiredDate = new Date(Number(date[0]), Number(date[1]), +day + 10);

  const showCv = async () => {
    const res = await fetch(`${API_URL}/user/details/${id}`);
    const data = await res.json();
    return dispatch(getObject(data))
  }

  return (
    <>
      <Wrapper>
        <div className="student-info">
          <div className="student-reservation">
            <p className="student-reservation-title">Rezerwacja do:</p>
            <p className="student-reservation-date">{expiredDate.toLocaleDateString().slice(0, 12)}</p>
          </div>
          <div className="student-data">
            <img src={githubUsername !== '' ? (`https://github.com/${githubUsername}.png` as string) : defaultAvatar} alt="avatar" className="student-img" />
            <p className="student-name">{`${firstName} ${lastName}`}</p>
          </div>
        </div>
        <div className="student-nav">
          <div className="student-nav-buttons">
            <Link to="/hr/cv">
              <Button onClick={() => showCv()} text="Pokaż CV" />
            </Link>
            <div className="btn-container">
              <Button text="Brak zainteresowania" />
            </div>
            <Button text="Zatrudniony" />
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
      <StudentInfo isOpen={isOpen} />
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
