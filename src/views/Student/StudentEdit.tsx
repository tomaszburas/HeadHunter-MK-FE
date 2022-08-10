import {FormEvent, useState} from 'react';
import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button';
import {Form} from '../../assets/styled/StudentAccountEdit/Form';
import {About} from '../../components/Student/StudentEdit/About';
import {Employment} from '../../components/Student/StudentEdit/Employment';
import {Education} from '../../components/Student/StudentEdit/Education';
import {Courses} from '../../components/Student/StudentEdit/Courses';
import {Experience} from '../../components/Student/StudentEdit/Experience';
import {Portfolio} from '../../components/Student/StudentEdit/Portfolio';
import {Scrum} from '../../components/Student/StudentEdit/Scrum';
import {Project} from '../../components/Student/StudentEdit/Project';
import {ButtonContainer} from '../../assets/styled/StudentAccountEdit/ButtonContainer';
import {AboutMeInterface} from '../../types/interfaces/Student/AboutMeInterface';
import {validationPassword} from '../../utils/validationPassword';
import {toast} from 'react-toastify';
import {validationEmail} from '../../utils/validationEmail';
import {EmploymentInterface} from '../../types/interfaces/Student/EmploymentInterface';
import {validationArrayUrl} from '../../utils/validationUrl';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {API_URL} from '../../config';
import {useNavigate} from 'react-router-dom';
import {setFirstLogin, setStudent} from '../../redux/features/studentSlice';

export const StudentEdit = () => {
  const state = useSelector((store: RootState) => store.student);
  const [load, setLoad] = useState(false);
  const {id} = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [internships, setInternships] = useState(state.canTakeApprenticeship);
  const {firstLogin} = useSelector((store: RootState) => store.student);

  const [about, setAbout] = useState<AboutMeInterface>({
    bio: state.bio,
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    password: '',
    passwordRepeat: '',
    tel: state.tel,
    githubUsername: state.githubUsername,
  });
  const [employment, setEmployment] = useState<EmploymentInterface>({
    targetWorkCity: state.targetWorkCity,
    expectedContractType: state.expectedContractType,
    monthsOfCommercialExp: state.monthsOfCommercialExp,
    canTakeApprenticeship: state.canTakeApprenticeship,
    expectedSalary: state.expectedSalary,
    expectedTypeWork: state.expectedTypeWork,
  });
  const [education, setEducation] = useState(state.education);
  const [courses, setCourses] = useState(state.courses);
  const [workExperience, setWorkExperience] = useState(state.workExperience);
  const [portfolioUrls, setPortfolioUrls] = useState<string[]>(
    state.portfolioUrls.length === 0 ? [''] : state.portfolioUrls
  );
  const [scrumUrls, setScrumUrls] = useState<string[]>(
    state.scrumUrls.length === 0 ? [''] : state.scrumUrls
  );
  const [projectUrls, setProjectUrls] = useState<string[]>(
    state.projectUrls.length === 0 ? [''] : state.projectUrls
  );

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoad(true);

    if (!validate()) {
      setLoad(false);
      return;
    }

    const obj = {
      ...about,
      targetWorkCity: employment.targetWorkCity,
      expectedContractType: employment.expectedContractType,
      monthsOfCommercialExp: Number(employment.monthsOfCommercialExp),
      canTakeApprenticeship: Number(internships),
      expectedSalary: Number(employment.expectedSalary),
      expectedTypeWork: employment.expectedTypeWork,
      education,
      courses,
      workExperience,
      portfolioUrls: portfolioUrls.filter((el) => el !== ''),
      scrumUrls: scrumUrls.filter((el) => el !== ''),
      projectUrls: projectUrls.filter((el) => el !== ''),
    };

    const res = await fetch(`${API_URL}/user/update/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Zmiany zostały zapisane');

      dispatch(setStudent({...data.user}));
      if (firstLogin) {
        dispatch(setFirstLogin({firstLogin: false}));
      }
      navigate('/student', {replace: true});
    } else {
      toast.success(data.message);
    }

    setLoad(false);
  };

  const validate = (): boolean => {
    // ABOUT ME
    if (about.firstName.length <= 0) {
      toast.error('Wpisz swoje imię');
      return false;
    }

    if (about.lastName.length <= 0) {
      toast.error('Wpisz swoje nazwisko');
      return false;
    }

    if (about.email.length <= 0) {
      toast.error('Wpisz swój email');
      return false;
    }

    if (about.tel.length <= 0) {
      toast.error('Wpisz swój telefon');
      return false;
    }

    if (about.password.length > 0 && !validationPassword(about.password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      return false;
    }

    if (about.password.length > 0) {
      if (about.password !== about.passwordRepeat) {
        toast.error('Podane hasła różnią się');
        return false;
      }
    }

    if (!validationEmail(about.email)) {
      toast.error('Niepoprawny adres email');
      return false;
    }

    // EMPLOYMENT
    if (employment.expectedTypeWork.length <= 0) {
      toast.error('Zaznacz preferowane miejsce pracy');
      return false;
    }

    if (employment.expectedContractType.length <= 0) {
      toast.error('Zaznacz typ kontraktu');
      return false;
    }

    if (employment.monthsOfCommercialExp < 0) {
      toast.error('Wpisz swoje doświadczenie komercyjne w programowaniu');
      return false;
    }

    if (employment.targetWorkCity.length <= 0) {
      toast.error('Wpisz miasto w którym chcesz pracować');
      return false;
    }

    if (employment.expectedSalary <= 0) {
      toast.error('Wpisz oczekiwane wynagrodzenie netto');
      return false;
    }

    // PORTFOLIO URL
    if (!validationArrayUrl(portfolioUrls, setPortfolioUrls)) {
      toast.error(
        `Wpisz poprawne adresy url w portfolio np. https://nazwa.com`
      );
      return false;
    }

    // SCRUM URL
    if (!validationArrayUrl(scrumUrls, setScrumUrls)) {
      toast.error(`Wpisz poprawne adresy url w Scrum np. https://nazwa.com`);
      return false;
    }

    // PROJECT URL
    if (!validationArrayUrl(projectUrls, setProjectUrls)) {
      toast.error(
        `Wpisz poprawne adresy url w projekcie na zaliczenie np. https://nazwa.com`
      );
      return false;
    }

    return true;
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleForm}>
        <About state={about} setState={setAbout} />
        <Employment
          state={employment}
          setState={setEmployment}
          internships={internships}
          setInternships={setInternships}
        />
        <Education state={education} setState={setEducation} />
        <Courses state={courses} setState={setCourses} />
        <Experience state={workExperience} setState={setWorkExperience} />
        <Portfolio state={portfolioUrls} setState={setPortfolioUrls} />
        <Scrum state={scrumUrls} setState={setScrumUrls} />
        <Project state={projectUrls} setState={setProjectUrls} />

        <ButtonContainer>
          <Button text="Zapisz" type="submit" load={load} />
        </ButtonContainer>
      </Form>
    </>
  );
};
