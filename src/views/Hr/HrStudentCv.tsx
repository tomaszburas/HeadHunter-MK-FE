import {Header} from '../../components/Header/Header';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import styled from 'styled-components';
import {Button} from '../../components/Button';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {API_URL} from '../../config';
import {StudentState} from '../../redux/features/studentSlice';
import {v4 as uuid} from 'uuid';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {checkGithub} from '../../utils/checkGithub';
import defaultAvatar from '../../assets/images/avatar.png';

export const HrStudentCv = () => {
  const [student, setStudent] = useState<StudentState | null>(null);
  const {id: hrId} = useSelector((store: RootState) => store.auth);
  const {id} = useParams();
  const navigate = useNavigate();
  const [isAvatar, setIsAvatar] = useState<null | boolean>(null);

  const handleRemoveStudent = async () => {
    await fetch(`${API_URL}/hr/not-interested/${hrId}/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    navigate('/hr/to-talk', {replace: true});
  };

  useEffect(() => {
    const showCv = async () => {
      const res = await fetch(`${API_URL}/user/details/${id}`);
      const data = await res.json();
      setStudent(data.user);
    };
    showCv();
  }, [id, student]);

  useEffect(() => {
    (async () => {
      if (student && student.githubUsername !== '') {
        await checkGithub(student.githubUsername, setIsAvatar);
      } else {
        setIsAvatar(false);
      }
    })();
  }, [student?.githubUsername]);

  const stars = (star: number) => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      if (star > 0) {
        arr.push(
          <span className="stars-data--active" key={uuid()}>
            <i className="bx bxs-star" />
          </span>
        );
        star--;
      } else {
        arr.push(<i className="bx bxs-star" key={uuid()} />);
      }
    }
    return arr;
  };
  return (
    <>
      <Header />
      <WrapperHr>
        <Wrapper>
          <div className="student-info-container">
            <Link to="/hr/to-talk">
              <button className="back-btn">
                <i className="bx bx-chevrons-left" />
                Wróć
              </button>
            </Link>
            <img
              src={
                isAvatar
                  ? `https://github.com/${student?.githubUsername}.png`
                  : defaultAvatar
              }
              alt="avatar"
              className="student-img"
            />
            <p className="student-name">
              {student?.firstName} {student?.lastName}
            </p>
            {student?.githubUsername && (
              <a
                href={`https://github.com/${student?.githubUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="student-github">
                  <i className="bx bxl-github" /> {student?.githubUsername}
                </p>
              </a>
            )}
            <div className="student-contact">
              <div className="student-contact-box">
                <span className="contact-icon">
                  <i className="bx bxs-phone" />
                </span>
                <p className="contact-txt">
                  <a href={`tel:${student?.tel}`}>+48 {student?.tel}</a>
                </p>
              </div>
              <div className="student-contact-box">
                <span className="contact-icon">
                  <i className="bx bxs-envelope" />
                </span>
                <p className="contact-txt">
                  <a href={`mailto:${student?.email}`}>{student?.email}</a>
                </p>
              </div>
            </div>
            {student?.bio && (
              <div className="student-description">
                <p className="student-description-title">O mnie</p>
                <p className="student-description-txt">{student?.bio}</p>
              </div>
            )}
            <div className="button-container">
              <div className="button-box">
                <Button
                  onClick={() => handleRemoveStudent()}
                  text="Brak zainteresowania"
                />
              </div>
              <Button text="Zatrudniony 🔥" />
            </div>
          </div>
          <div className="student-data-container">
            <div className="data-wrapper">
              <p className="title">Oceny</p>
              <div className="content">
                <div className="content-box">
                  <p className="content-box-title">Ocena przejścia kursu</p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.courseCompletion}
                      </span>{' '}
                      /5
                    </p>
                    <div className="data">
                      {stars(student?.courseCompletion as number).map(
                        (el) => el
                      )}
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena aktywności i zaangażowania na kursie
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.courseEngagement}
                      </span>{' '}
                      /5
                    </p>
                    <div className="data">
                      {stars(student?.courseEngagement as number).map(
                        (el) => el
                      )}
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena kodu w projekcie własnym
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.projectDegree}
                      </span>{' '}
                      /5
                    </p>
                    <div className="data">
                      {stars(student?.projectDegree as number).map((el) => el)}
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena pracy w zespole w Scrum
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.teamProjectDegree}
                      </span>{' '}
                      /5
                    </p>
                    <div className="data">
                      {stars(student?.teamProjectDegree as number).map(
                        (el) => el
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Oczekiwania w stosunku do zatrudnienia</p>
              <div className="content">
                <div className="content-box">
                  <p className="content-box-title">Preferowane miejsce pracy</p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.expectedTypeWork}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Docelowe miasto gdzie chce pracować kandydat
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.targetWorkCity}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">Oczekiwany typ kontraktu</p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.expectedContractType}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Oczekiwane wynagrodzenie miesięczne netto
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.expectedSalary} zł
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Zgoda na odbycie bezpłatnych praktyk/stażu
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.canTakeApprenticeship ? 'TAK' : 'NIE'}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Komercyjne doświadczenie w programowaniu
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">
                        {student?.monthsOfCommercialExp === 0
                          ? 'BRAK'
                          : `${student?.monthsOfCommercialExp} miesięcy`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {student?.education && (
              <div className="data-wrapper">
                <p className="title">Edukacja</p>
                <div className="content line-height">{student?.education}</div>
              </div>
            )}

            {student?.courses && (
              <div className="data-wrapper">
                <p className="title">Kursy</p>
                <div className="content line-height">{student?.courses}</div>
              </div>
            )}

            {student?.workExperience && (
              <div className="data-wrapper">
                <p className="title">Doświadczenie zawodowe</p>
                <div className="content line-height">
                  {student?.workExperience}
                </div>
              </div>
            )}

            {student?.portfolioUrls && student.portfolioUrls.length !== 0 && (
              <div className="data-wrapper">
                <p className="title">Portfolio</p>
                <div className="content">
                  <div className="link-container">
                    {student?.portfolioUrls?.map((item, index) => (
                      <div key={index} className="link-box">
                        <i className="bx bx-link-alt" />
                        <a
                          href={`${item}`}
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {student?.scrumUrls && student?.scrumUrls.length !== 0 && (
              <div className="data-wrapper">
                <p className="title">Projekt w zespole Scrumowym</p>
                <div className="content">
                  <div className="link-container">
                    {student?.scrumUrls?.map((item, index) => (
                      <div key={index} className="link-box">
                        <i className="bx bx-link-alt" />
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {student?.bonusProjectUrls &&
              student?.bonusProjectUrls.length !== 0 && (
                <div className="data-wrapper">
                  <p className="title">Projekt na zaliczenie</p>
                  <div className="content">
                    <div className="link-container">
                      {student?.bonusProjectUrls?.map((item, index) => (
                        <div key={index} className="link-box">
                          <i className="bx bx-link-alt" />
                          <a
                            href={item}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </Wrapper>
      </WrapperHr>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  .student-info-container {
    padding: ${(props) => props.theme.paddingSize.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;

    .back-btn {
      background-color: ${(props) => props.theme.colors.darkBlue};
      padding: ${(props) => props.theme.paddingSize.sm};
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;

      .bx-chevrons-left {
        font-size: ${(props) => props.theme.fontSize.sm};
      }
    }

    .student-img {
      width: 70%;
      margin: ${(props) => props.theme.marginSize.base} 0;
    }

    .student-name {
      font-size: ${(props) => props.theme.fontSize.base};
      color: ${(props) => props.theme.colors.white};
      margin-bottom: ${(props) => props.theme.marginSize.base};
    }

    .student-github {
      color: ${(props) => props.theme.colors.blue};
      display: flex;
      align-items: center;
      margin-bottom: ${(props) => props.theme.marginSize.base};
      cursor: pointer;

      .bxl-github {
        font-size: ${(props) => props.theme.fontSize.base};
        margin-right: calc(${(props) => props.theme.marginSize.sm} / 2);
      }
    }

    .student-contact {
      margin-bottom: ${(props) => props.theme.marginSize.base};
      width: 100%;
      .student-contact-box {
        display: flex;
        align-items: center;

        .contact-icon {
          color: ${(props) => props.theme.colors.gray};
          margin-right: calc(${(props) => props.theme.marginSize.sm} / 2);
        }

        .contact-txt {
          color: ${(props) => props.theme.colors.lightGray};
        }
      }
    }

    .student-description {
      margin-bottom: ${(props) => props.theme.marginSize.base};

      .student-description-title {
        color: ${(props) => props.theme.colors.gray};
      }

      .student-description-txt {
        color: ${(props) => props.theme.colors.lightGray};
        line-height: 1.2;
      }
    }

    .button-container {
      width: 100%;
      .button-box {
        margin-bottom: ${(props) => props.theme.marginSize.sm};
      }
    }
  }

  .student-data-container {
    padding-right: ${(props) => props.theme.paddingSize.base};
    padding-bottom: ${(props) => props.theme.paddingSize.base};
    width: 75%;

    .data-wrapper {
      .title {
        padding: ${(props) => props.theme.paddingSize.base};
        font-size: ${(props) => props.theme.fontSize.sm};
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
      }

      .line-height {
        line-height: 1.2;
      }

      .content {
        background-color: ${(props) => props.theme.colors.background};
        padding: ${(props) => props.theme.paddingSize.base};
        display: flex;
        gap: 2%;

        .link-container {
          display: flex;
          flex-direction: column;

          .link-box {
            color: ${(props) => props.theme.colors.blue};
            display: flex;
            align-items: center;

            &:not(:first-child) {
              margin-top: ${(props) => props.theme.marginSize.sm};
            }

            .bx-link-alt {
              font-size: ${(props) => props.theme.fontSize.base};
              margin-right: ${(props) => props.theme.marginSize.sm};
            }
          }
        }

        .content-box {
          width: 23.5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: ${(props) => props.theme.fontSize.m};

          .content-box-title {
            margin-bottom: ${(props) => props.theme.marginSize.base};
          }
          .data-box {
            display: flex;

            .txt-data {
              margin-right: ${(props) => props.theme.marginSize.sm};
              white-space: nowrap;

              .txt-data--white {
                color: ${(props) => props.theme.colors.white};
              }
            }

            .data {
              white-space: nowrap;
              .stars-data--active {
                color: ${(props) => props.theme.colors.red};
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;

    .student-info-container {
      width: 100%;

      .student-img {
        max-width: 150px;
      }
    }

    .student-data-container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 700px) {
    .student-data-container {
      .data-wrapper {
        .content {
          flex-direction: column;

          .content-box {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: ${(props) => props.theme.marginSize.sm};

            .content-box-title {
              margin-bottom: 0;
              margin-right: ${(props) => props.theme.marginSize.sm};
            }
        }
      }
    }
  }
`;
