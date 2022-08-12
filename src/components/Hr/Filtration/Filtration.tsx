import {FormEvent, useState} from 'react';
import styled from 'styled-components';
import {Stars} from '../../../types/enums/Stars';
import {CourseGrade} from './CourseGrade';
import {ActivityGrade} from './ActivityGrade';
import {CodeGrade} from './CodeGrade';
import {ScrumGrade} from './ScrumGrade';
import {WorkplaceForm} from './WorkplaceForm';
import {WorkType} from '../../../types/enums/WorkType';
import {ContractType} from '../../../types/enums/ContractType';
import {ContractForm} from './ContractForm';
import {Internships} from '../../../types/enums/Internships';
import {toast} from 'react-toastify';
import {NavigationHr} from '../../../types/enums/NavigationHr';
import {useNavigate} from 'react-router-dom';
import {API_URL} from '../../../config';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';

interface Props {
  setOpenFiltration: (value: boolean) => void;
  by: NavigationHr;
  page: number;
  itemsOnPage: number;
}

export const Filtration = ({
  setOpenFiltration,
  by,
  page,
  itemsOnPage,
}: Props) => {
  const [courseGrade, setCourseGrade] = useState<Stars[]>([]);
  const [engagementGrade, setEngagementGrade] = useState<Stars[]>([]);
  const [codeGrade, setCodeGrade] = useState<Stars[]>([]);
  const [scrumGrade, setScrumGrade] = useState<Stars[]>([]);
  const [workplace, setWorkplace] = useState<WorkType[]>([]);
  const [contract, setContract] = useState<ContractType[]>([]);
  const [internships, setInternships] = useState<Internships>(Internships.YES);
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState<{
    from: string;
    to: string;
  }>({
    from: '0',
    to: '8000',
  });
  const navigate = useNavigate();
  const {id} = useSelector((store: RootState) => store.auth);

  const [clear, setClear] = useState(false);

  const clearAll = () => {
    setCourseGrade([]);
    setEngagementGrade([]);
    setCodeGrade([]);
    setScrumGrade([]);
    setWorkplace([]);
    setContract([]);
    setInternships(Internships.YES);
    setExperience('');
    setSalary({from: '', to: ''});

    setClear(true);
  };

  const handle = async () => {
    const params = new URLSearchParams();

    if (courseGrade.length > 0) {
      courseGrade.map((el) => params.append('courseCompletion', `${el}`));
    }

    if (engagementGrade.length > 0) {
      engagementGrade.map((el) => params.append('courseEngagement', `${el}`));
    }

    if (codeGrade.length > 0) {
      codeGrade.map((el) => params.append('projectDegree', `${el}`));
    }

    if (scrumGrade.length > 0) {
      scrumGrade.map((el) => params.append('teamProjectDegree', `${el}`));
    }

    if (workplace.length > 0) {
      workplace.map((el) => params.append('expectedTypeWork', `${el}`));
    }

    if (contract.length > 0) {
      contract.map((el) => params.append('expectedContractType', `${el}`));
    }

    if (internships === 0 || internships == 1) {
      params.append('canTakeApprenticeship', `${internships}`);
    }

    if (salary.from.length > 0) {
      params.append('expectedSalaryFrom', `${salary.from}`);
    } else {
      params.append('expectedSalaryFrom', `0`);
    }

    if (salary.to.length > 0) {
      params.append('expectedSalaryTo', `${salary.to}`);
    } else {
      params.append('expectedSalaryTo', `0`);
    }

    if (experience.length > 0) {
      if (Number(experience) < 0) {
        toast.error('Wpisz prawidłową liczbę misięcy');
        return;
      } else {
        params.append('monthsOfCommercialExp', `${experience}`);
      }
    }

    if (by === NavigationHr.AVAILABLE_STUDENTS) {
      const res = await fetch(
        `${API_URL}/hr/filter-available/${page}/${itemsOnPage}/${id}?${params.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
        }
      );

      const data = await res.json();

      if (data.success) {
        if (data.students.length === 0) {
          toast.error('Nie wyszukano kursantów z podanymi kryteriami');
          return;
        }
        navigate(`/hr/available/filter?${params.toString()}`, {
          replace: true,
        });
      } else {
        toast.error(data.message);
      }
      setOpenFiltration(false);
    }

    if (by === NavigationHr.TO_TALK_STUDENTS) {
      const res = await fetch(
        `${API_URL}/hr/filter-to-talk/${page}/${itemsOnPage}/${id}?${params.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
        }
      );

      const data = await res.json();

      if (data.success) {
        if (data.students.length === 0) {
          toast.error('Nie wyszukano kursantów z podanymi kryteriami');
          return;
        }
        navigate(`/hr/to-talk/filter?${params.toString()}`, {
          replace: true,
        });
      } else {
        toast.error(data.message);
      }
      setOpenFiltration(false);
    }
  };

  const toggleBtn = (
    e: FormEvent,
    prop: Stars,
    state: Stars[],
    setState: (param: (prev: Stars[]) => Stars[]) => void
  ) => {
    e.preventDefault();
    const val = state.includes(prop);
    if (val) {
      setState((prev) => prev.filter((star) => star !== prop));
    } else {
      setState((prev) => [...prev, prop]);
    }
  };

  return (
    <Container>
      <div className="bg" onClick={() => setOpenFiltration(false)} />
      <div className="filtration">
        <div className="title-box">
          <p className="title">Filtrowanie</p>
          <button className="clear-btn" onClick={clearAll}>
            Wyczyść wszystkie
          </button>
        </div>
        <form>
          <CourseGrade
            courseGrade={courseGrade}
            setCourseGrade={setCourseGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <ActivityGrade
            engagementGrade={engagementGrade}
            setEngagementGrade={setEngagementGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <CodeGrade
            codeGrade={codeGrade}
            setCodeGrade={setCodeGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <ScrumGrade
            scrumGrade={scrumGrade}
            setScrumGrade={setScrumGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <WorkplaceForm
            workplace={workplace}
            setWorkplace={setWorkplace}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <ContractForm
            contract={contract}
            setContract={setContract}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />

          <div className="input-wrapper">
            <p className="title">Oczekiwane wynagrodzenie miesięczne netto</p>
            <div className="input-box">
              <div className="input-container">
                <label htmlFor="from" className="input-title">
                  Od
                </label>
                <input
                  type="number"
                  id="from"
                  placeholder="np. 2000 zł"
                  value={salary.from}
                  onChange={(e) =>
                    setSalary(({to}) => {
                      return {from: e.target.value, to};
                    })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="to" className="input-title">
                  Do
                </label>
                <input
                  type="number"
                  id="to"
                  placeholder="np. 10000 zł"
                  value={salary.to}
                  onChange={(e) =>
                    setSalary(({from}) => {
                      return {from, to: e.target.value};
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="input-wrapper">
            <p className="title">Zgoda na odbycie bezpłatnych praktyk/stażu</p>
            <div className="input-box">
              <div className="input-container">
                <input
                  type="radio"
                  id="yes"
                  name="internships"
                  value={Internships.YES}
                  checked={internships === Internships.YES}
                  onChange={() => setInternships(Internships.YES)}
                />
                <label htmlFor="yes" className="input-title">
                  Tak
                </label>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  id="no"
                  name="internships"
                  value={Internships.NO}
                  checked={internships === Internships.NO}
                  onChange={() => setInternships(Internships.NO)}
                />
                <label htmlFor="no" className="input-title">
                  Nie
                </label>
              </div>
            </div>
          </div>

          <div className="input-wrapper">
            <p className="title">
              Min. ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu
            </p>
            <div className="input-box">
              <input
                type="number"
                min={0}
                placeholder="np. 6 miesięcy"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="footer-box">
          <button
            className="clear-btn"
            onClick={() => setOpenFiltration(false)}
          >
            Anuluj
          </button>
          <button className="save-btn" onClick={handle}>
            Pokaż wynik
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
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

  .filtration {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.black};
    padding: ${(props) => props.theme.paddingSize.base};
    z-index: 10;
    color: ${(props) => props.theme.colors.white};
    max-height: 80vh;
    overflow: auto;

    .save-btn,
    .clear-btn {
      padding: ${(props) => props.theme.paddingSize.sm};
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.colors.white};
    }

    .clear-btn {
      background-color: ${(props) => props.theme.colors.darkBlue};
    }

    .save-btn {
      background-color: ${(props) => props.theme.colors.red};
      margin-left: ${(props) => props.theme.marginSize.sm};
    }

    .title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: ${(props) => props.theme.fontSize.base};
        color: ${(props) => props.theme.colors.white};
      }
    }

    form {
      .input-wrapper {
        margin: ${(props) => props.theme.marginSize.base} 0;

        .title {
          margin-bottom: ${(props) => props.theme.marginSize.sm};
          color: ${(props) => props.theme.colors.white};
          font-size: ${(props) => props.theme.fontSize.sm};
        }

        .input-box {
          display: flex;
          gap: ${(props) => props.theme.marginSize.sm};

          .filtration-btn {
            display: flex;
            align-items: center;
            cursor: pointer;
            border: none;
            color: ${(props) => props.theme.colors.white};
            background-color: ${(props) => props.theme.colors.darkGray};
            padding: ${(props) => props.theme.marginSize.sm};

            .bxs-star {
              color: ${(props) => props.theme.colors.red};
              margin-left: calc(${(props) => props.theme.marginSize.sm} / 2);
            }
          }

          .filtration-btn--blue {
            background-color: ${(props) => props.theme.colors.darkBlue};
          }

          .input-container:first-child {
            margin-right: ${(props) => props.theme.marginSize.base};
          }

          .input-title {
            font-size: ${(props) => props.theme.fontSize.sm};
            margin-right: ${(props) => props.theme.marginSize.sm};
            cursor: pointer;
          }

          input[type='number'] {
            padding: ${(props) => props.theme.paddingSize.sm};
            border: none;
            background-color: ${(props) => props.theme.colors.darkGray};
            color: ${(props) => props.theme.colors.white};

            &:focus {
              outline: 1px solid ${(props) => props.theme.colors.red};
            }
          }

          input[type='radio'] {
            transform: scale(1.5);
            margin-right: ${(props) => props.theme.marginSize.sm};
          }
        }
      }
    }

    .footer-box {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 600px) {
    .filtration {
      width: 90%;
      max-height: 90vh;

      form {
        .input-wrapper {
          .input-box {
            flex-wrap: wrap;
    }
  }
`;
