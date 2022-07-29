import React, {useState} from 'react';
import {Button} from '../../Button';
import {StudentInfo} from '../StudentInfo';
import styled from 'styled-components';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import avatar from '../../../assets/images/avatar.png';
import {Link} from 'react-router-dom';

export const ToTalkStudent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="student-info">
          <div className="student-reservation">
            <p className="student-reservation-title">Rezerwacja do</p>
            <p className="student-reservation-date">11.09.2022 r.</p>
          </div>
          <div className="student-data">
            <img src={avatar} alt="avatar" className="student-img" />
            <p className="student-name">Jan Kowalski</p>
          </div>
        </div>
        <div className="student-nav">
          <Link to="/hr/cv">
            <Button text="Pokaż CV" />
          </Link>
          <div className="btn-container">
            <Button text="Brak zainteresowania" />
          </div>
          <Button text="Zatrudniony" />
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

    .btn-container {
      margin: 0 ${(props) => props.theme.marginSize.base};
    }

    .bx-chevron-up,
    .bx-chevron-down {
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.base};
      cursor: pointer;
    }
  }
`;
