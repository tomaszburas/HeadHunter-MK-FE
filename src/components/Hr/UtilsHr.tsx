import styled from 'styled-components';
import {Input} from '../../assets/styled/Input';
import {Filtration} from './Filtration/Filtration';
import {useDispatch} from 'react-redux';
import {searchName} from '../../redux/features/searchBarSlice';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

interface Props {
  by: NavigationHr;
  filter?: boolean;
  page: number;
  itemsOnPage: number;
}

export const UtilsHr = ({by, filter, page, itemsOnPage}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openFiltration, setOpenFiltration] = useState(false);

  const checkNav = () => {
    if (by === NavigationHr.AVAILABLE_STUDENTS) {
      navigate(`/hr/available`, {
        replace: true,
      });
    }

    if (by === NavigationHr.TO_TALK_STUDENTS) {
      navigate(`/hr/to-talk`, {
        replace: true,
      });
    }
  };

  return (
    <>
      <Utils>
        <div className="input-wrapper">
          <Input
            onChange={(e) =>
              dispatch(searchName({name: e.target.value.toLowerCase()}))
            }
            type="search"
            placeholder="Szukaj"
            id="search"
          />
          <label htmlFor="search">
            <i className="bx bx-search" />
          </label>
        </div>
        <div className="btn-box">
          {filter && (
            <button className="btn-clear" onClick={checkNav}>
              <i className="bx bx-trash-alt"></i>
              Wyczyść Filtrowanie
            </button>
          )}
          <button onClick={() => setOpenFiltration(true)}>
            <i className="bx bx-filter" /> Filtrowanie
          </button>
        </div>
      </Utils>
      {openFiltration && (
        <Filtration
          setOpenFiltration={setOpenFiltration}
          by={by}
          page={page}
          itemsOnPage={itemsOnPage}
        />
      )}
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

  .btn-box {
    display: flex;

    button {
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.lightGray};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;

      .bx {
        padding-right: ${(props) => props.theme.paddingSize.sm};
      }
    }

    .btn-clear {
      background-color: ${(props) => props.theme.colors.darkBlue};
      color: ${(props) => props.theme.colors.white};
      margin-right: ${(props) => props.theme.marginSize.sm};
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
