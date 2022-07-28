import styled from 'styled-components';
import {Button} from '../Button';
import React, {useState} from 'react';

export const Student = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <p className="student-name">Jan K.</p>
        <div className="student-nav">
          <Button text="Zarezerwuj rozmowę" />
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
      <Info isOpen={isOpen}>
        <div className="info-wrapper">
          <p className="info-title">Ocena przejścia kursu</p>
          <p className="info-data">
            <span>5</span> /5
          </p>
        </div>
        <div className="info-wrapper">
          <p className="info-title">
            Ocena aktywności i zaangażowania na kursie
          </p>
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
          <p className="info-title">
            Oczekiwane wynagrodzenie miesięczne netto
          </p>
          <p className="info-data">
            <span>8000 zł</span>
          </p>
        </div>
        <div className="info-wrapper">
          <p className="info-title">
            Zgoda na odbycie bezpłatnych praktyk/stażu
          </p>
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
      </Info>
      <Underline />
    </Container>
  );
};

const Container = styled.div``;

const Underline = styled.div`
  width: 100%;
  height: ${(props) => props.theme.paddingSize.sm};
  background-color: ${(props) => props.theme.colors.black};
`;

const Info = styled.div<{isOpen: Boolean}>`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.paddingSize.sm};
  font-size: ${(props) => props.theme.fontSize.m};
  display: flex;
  gap: 1%;
  justify-content: space-between;

  .info-wrapper {
    .info-title {
      height: 3rem;
    }
    .info-data {
      padding-top: ${(props) => props.theme.paddingSize.base};

      span {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  ${({isOpen}) => !isOpen && `display: none;`}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.paddingSize.base} 0;

  button {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  .student-name {
    padding-left: ${(props) => props.theme.paddingSize.sm};
    color: ${(props) => props.theme.colors.white};
  }

  .student-nav {
    display: flex;
    align-items: center;

    .bx-chevron-up,
    .bx-chevron-down {
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.base};
      cursor: pointer;
    }
  }
`;
