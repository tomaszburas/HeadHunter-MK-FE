import styled from 'styled-components';
import {AllAvailableUsers} from '../../types/interfaces/Student/EmploymentInterface';

interface Props {
  isOpen: boolean;
  user?: AllAvailableUsers;
}

export const StudentInfo = ({isOpen, user}: Props) => {
  return (
    <Container isOpen={isOpen}>
      <div className="info-wrapper">
        <p className="info-title">Ocena przejścia kursu</p>
        <p className="info-data">
          <span>{user?.courseCompletion}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena aktywności i zaangażowania na kursie</p>
        <p className="info-data">
          <span>{user?.courseEngagement}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena kodu w projekcie własnym</p>
        <p className="info-data">
          <span>{user?.projectDegree}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena pacy w zespole Scrum</p>
        <p className="info-data">
          <span>{user?.teamProjectDegree}</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Preferowane miejsce pracy</p>
        <p className="info-data">
          <span>{user?.expectedTypeWork}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">
          Docelowe miasto gdzie chce pracować kandydat
        </p>
        <p className="info-data">
          <span>{user?.targetWorkCity}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwany typ kontraktu</p>
        <p className="info-data">
          <span>{user?.expectedContractType}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwane wynagrodzenie miesięczne netto</p>
        <p className="info-data">
          <span>{user?.expectedSalary} zł</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Zgoda na odbycie bezpłatnych praktyk/stażu</p>
        <p className="info-data">
          <span>{user?.canTakeApprenticeship ? 'Nie' : 'Tak'}</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Komercyjne doświadczenie w programowaniu</p>
        <p className="info-data">
          <span>
            {user?.monthsOfCommercialExp === 0 && 'Brak'}
            {user?.monthsOfCommercialExp === 1 &&
              `${user.monthsOfCommercialExp} miesiąc`}
            {user &&
              user.monthsOfCommercialExp >= 2 &&
              user.monthsOfCommercialExp <= 4 &&
              `${user.monthsOfCommercialExp} miesiące`}
            {user &&
              user.monthsOfCommercialExp >= 5 &&
              `${user.monthsOfCommercialExp} miesięcy`}
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
