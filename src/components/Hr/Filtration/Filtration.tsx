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
import {NavigationHr} from '../../../types/enums/NavigationHr';
import {StudentState} from '../../../redux/features/studentSlice';

interface Props {
  setOpenFiltration: (param: boolean) => void;
  by: NavigationHr;
  setStudents: (value: StudentState[]) => void;
}

export const Filtration = ({setOpenFiltration, by, setStudents}: Props) => {
  const [courseGrade, setCourseGrade] = useState<Stars[]>([]);
  const [activityGrade, setActivityGrade] = useState<Stars[]>([]);
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
    from: '',
    to: '',
  });
  const [clear, setClear] = useState(false);

  const clearAll = () => {
    setCourseGrade([]);
    setActivityGrade([]);
    setCodeGrade([]);
    setScrumGrade([]);
    setWorkplace([]);
    setContract([]);
    setInternships(Internships.YES);
    setExperience('');
    setSalary({from: '', to: ''});

    setClear(true);
  };

  const handle = () => {
    console.log(`courseGrade ${courseGrade}`);
    console.log(`activityGrade ${activityGrade}`);
    console.log(`codeGrade ${codeGrade}`);
    console.log(`scrumGrade ${scrumGrade}`);
    console.log(`workplace ${workplace}`);
    console.log(`contract ${contract}`);
    console.log(`internships ${internships}`);
    console.log(`salary from:${salary.from} to:${salary.to}`);
    console.log(`experience ${experience}`);

    if (by === NavigationHr.AVAILABLE_STUDENTS) {
      // FILTRATION BY AVAILABLE STUDENTS
    }

    if (by === NavigationHr.TO_TALK_STUDENTS) {
      // FILTRATION BY TO TALKS STUDENTS
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
            activityGrade={activityGrade}
            setActivityGrade={setActivityGrade}
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
              Ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu
            </p>
            <div className="input-box">
              <input
                type="number"
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
