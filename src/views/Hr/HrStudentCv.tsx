import {Header} from '../../components/Header/Header';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar.png';
import {Button} from '../../components/Button';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../../redux";
import {StudentState} from "../../redux/features/studentSlice";

export const HrStudentCv = () => {
  const {
    email,
    firstName,
    githubUsername,
    lastName,
    tel,
      bio,
      courseCompletion,
      courseEngagement,
      monthsOfCommercialExp,
      courses,
      scrumUrls,
      education,
      expectedContractType,
      bonusProjectUrls,
      canTakeApprenticeship,
      portfolioUrls,
      targetWorkCity,
      workExperience,
      expectedSalary,
      projectDegree,
      avatarUrl,
      projectUrls,
      expectedTypeWork,
      teamProjectDegree
  } = useSelector(({users}: RootState) => users.user) as StudentState;

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
            <img src={avatarUrl} alt="avatar" className="student-img" />
            <p className="student-name">{firstName} {lastName}</p>
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
              <p className="student-github">
                <i className="bx bxl-github" /> {githubUsername}
              </p>
            </a>
            <div className="student-contact">
              <div className="student-contact-box">
                <span className="contact-icon">
                  <i className="bx bxs-phone" />
                </span>
                <p className="contact-txt">
                  <a href="tel:123-456-444">+48 {tel}</a>
                </p>
              </div>
              <div className="student-contact-box">
                <span className="contact-icon">
                  <i className="bx bxs-envelope" />
                </span>
                <p className="contact-txt">
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
            <div className="student-description">
              <p className="student-description-title">O mnie</p>
              <p className="student-description-txt">
                {bio}
              </p>
            </div>
            <div className="button-container">
              <div className="button-box">
                <Button text="Brak zainteresowania" />
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
                      <span className="txt-data--white">{courseCompletion}</span> /5
                    </p>
                    <div className="data">
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena aktywności i zaangażowania na kursie
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{courseEngagement}</span> /5
                    </p>
                    <div className="data">
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena kodu w projekcie własnym
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{projectDegree}</span> /5
                    </p>
                    <div className="data">
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Ocena pracy w zespole w Scrum
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{teamProjectDegree}</span> /5
                    </p>
                    <div className="data">
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <span className="stars-data--active">
                        <i className="bx bxs-star" />
                      </span>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
                      <span className="txt-data--white">{expectedTypeWork}</span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Docelowe miasto gdzie chce pracować kandydat
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{targetWorkCity}</span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">Oczekiwany typ kontraktu</p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{expectedContractType}</span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Oczekiwane wynagrodzenie miesięczne netto
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{expectedSalary} zł</span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Zgoda na odbycie bezpłatnych praktyk/stażu
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{canTakeApprenticeship ? 'TAK' : "NIE"}</span>
                    </p>
                  </div>
                </div>
                <div className="content-box">
                  <p className="content-box-title">
                    Komercyjne doświadczenie w programowaniu
                  </p>
                  <div className="data-box">
                    <p className="txt-data">
                      <span className="txt-data--white">{monthsOfCommercialExp === 0 ? 'BRAK' : `${monthsOfCommercialExp} miesięcy`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Edukacja</p>
              <div className="content line-height">
                {education}
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Kursy</p>
              <div className="content line-height">
                {courses}
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Doświadczenie zawodowe</p>
              <div className="content line-height">
                {workExperience}
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Portfolio</p>
              <div className="content">
                <div className="link-container">
                  <div className="link-box">
                    <i className="bx bx-link-alt" />
                    {portfolioUrls?.map((item) => (
                        <a
                            href={`${item}`}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                          {item}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Projekt w zespole Scrumowym</p>
              <div className="content">
                <div className="link-container">
                  <div className="link-box">
                    <i className="bx bx-link-alt" />
                    {projectUrls?.map((item) => (
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                          {item}
                        </a>
                    ))}
                  </div>
                  <div className="link-box">
                    <i className="bx bx-link-alt" />
                    {scrumUrls?.map((item) => (
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                          {item}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="data-wrapper">
              <p className="title">Projekt na zaliczenie</p>
              <div className="content">
                <div className="link-container">
                  <div className="link-box">
                    <i className="bx bx-link-alt" />
                    {bonusProjectUrls?.map((item) => (
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                          {item}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
    }

    .student-github {
      color: ${(props) => props.theme.colors.blue};
      display: flex;
      align-items: center;
      margin-top: ${(props) => props.theme.marginSize.sm};
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
