import styled from 'styled-components';
import {StudentInfoInterface} from '../../types/interfaces/Hr/StudentInfoInterface';

interface Props {
  isOpen: boolean;
  student: StudentInfoInterface;
}

export const StudentInfo = ({isOpen, student}: Props) => {
  return (
    <Container isOpen={isOpen}>
      <div className="info-wrapper">
        <p className="info-title">Ocena przejścia kursu</p>
        <p className="info-data">
          <span>{student.courseCompletion}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena aktywności i zaangażowania na kursie</p>
        <p className="info-data">
          <span>{student.courseEngagement}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena kodu w projekcie własnym</p>
        <p className="info-data">
          <span>{student.projectDegree}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena pacy w zespole Scrum</p>
        <p className="info-data">
          <span>{student.teamProjectDegree}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Preferowane miejsce pracy</p>
        <p className="info-data">
          <span>{student.expectedTypeWork}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">
          Docelowe miasto gdzie chce pracować kandydat
        </p>
        <p className="info-data">
          <span>{student.targetWorkCity}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwany typ kontraktu</p>
        <p className="info-data">
          <span>{student.expectedContractType}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwane wynagrodzenie miesięczne netto</p>
        <p className="info-data">
          <span>{student.expectedSalary} zł</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Zgoda na odbycie bezpłatnych praktyk/stażu</p>
        <p className="info-data">
          <span>{student.canTakeApprenticeship ? 'Nie' : 'Tak'}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Komercyjne doświadczenie w programowaniu</p>
        <p className="info-data">
          <span>
            {student.monthsOfCommercialExp === 0 && 'Brak'}
            {student.monthsOfCommercialExp === 1 &&
              `${student.monthsOfCommercialExp} miesiąc`}
            {student &&
              student.monthsOfCommercialExp >= 2 &&
              student.monthsOfCommercialExp <= 4 &&
              `${student.monthsOfCommercialExp} miesiące`}
            {student &&
              student.monthsOfCommercialExp >= 5 &&
              `${student.monthsOfCommercialExp} miesięcy`}
          </span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div<{isOpen: Boolean}>`
  @-webkit-keyframes SHOW-BOX {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes SHOW-BOX {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes SHOW-BOX {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes SHOW-BOX {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  -webkit-animation: SHOW-BOX 0.5s ease;
  -moz-animation: SHOW-BOX 0.5s ease;
  -o-animation: SHOW-BOX 0.5s ease;
  animation: SHOW-BOX 0.5s ease;

  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.paddingSize.sm};
  font-size: ${(props) => props.theme.fontSize.m};
  display: flex;
  gap: 1%;
  justify-content: space-between;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info-data {
      padding-top: ${(props) => props.theme.paddingSize.base};

      span {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    font-size: ${(props) => props.theme.fontSize.sm};

    .info-wrapper {
      flex-direction: row;
      align-items: center;

      &:not(:first-child) {
        margin-top: ${(props) => props.theme.marginSize.sm};
      }

      .info-data {
        padding-top: 0;
        margin-left: ${(props) => props.theme.marginSize.sm};
        white-space: nowrap;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  ${({isOpen}) => !isOpen && `display: none;`}
`;
