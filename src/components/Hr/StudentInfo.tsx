import styled from 'styled-components';
import React from 'react';

interface Props {
  isOpen: boolean;
}

export const StudentInfo = ({isOpen}: Props) => {
  return (
    <Container isOpen={isOpen}>
      <div className="info-wrapper">
        <p className="info-title">Ocena przejścia kursu</p>
        <p className="info-data">
          <span>5</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena aktywności i zaangażowania na kursie</p>
        <p className="info-data">
          <span>5</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena kodu w projekcie własnym</p>
        <p className="info-data">
          <span>5</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Ocena pacy w zespole Scrum</p>
        <p className="info-data">
          <span>5</span> /5
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Preferowane miejsce pracy</p>
        <p className="info-data">
          <span>Biuro</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">
          Docelowe miasto gdzie chce pracować kandydat
        </p>
        <p className="info-data">
          <span>Warszawa</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwany typ kontraktu</p>
        <p className="info-data">
          <span>UoP</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Oczekiwane wynagrodzenie miesięczne netto</p>
        <p className="info-data">
          <span>8000 zł</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Zgoda na odbycie bezpłatnych praktyk/stażu</p>
        <p className="info-data">
          <span>TAK</span>
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-title">Komercyjne doświadczenie w programowaniu</p>
        <p className="info-data">
          <span>6 miesięcy</span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div<{isOpen: Boolean}>`
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

  ${({isOpen}) => !isOpen && `display: none;`}
`;
