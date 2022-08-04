import styled from 'styled-components';
import {Input} from '../../assets/styled/Input';
import {useState} from 'react';
import {Filtration} from './Filtration/Filtration';

export const UtilsHr = () => {
  const [openFiltration, setOpenFiltration] = useState(false);

  return (
    <>
      <Utils>
        <div className="input-wrapper">
          <Input type="search" placeholder="Szukaj" id="search" />
          <label htmlFor="search">
            <i className="bx bx-search" />
          </label>
        </div>
        <button onClick={() => setOpenFiltration(true)}>
          <i className="bx bx-filter" /> Filtrowanie
        </button>
      </Utils>
      {openFiltration && <Filtration setOpenFiltration={setOpenFiltration} />}
    </>
  );
};

const Utils = styled.div`
  padding: ${(props) => props.theme.paddingSize.base};
  border-bottom: solid 2px ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: space-between;

  .input-wrapper {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input[type='search'] {
      position: relative;
      padding-right: ${(props) => props.theme.paddingSize.xl};
    }

    /* clears the 'X' from Internet Explorer */
    input[type='search']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    input[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      display: none;
    }

    label {
      position: absolute;
      padding-right: ${(props) => props.theme.paddingSize.sm};
      cursor: pointer;
      display: flex;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.lightGray};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    .bx-filter {
      padding-right: ${(props) => props.theme.paddingSize.sm};
    }
  }

  @media only screen and (max-width: 1000px) {
    .input-wrapper {
      width: 40%;
    }
  }

  @media only screen and (max-width: 600px) {
    .input-wrapper {
      width: 60%;
    }
  }
`;
