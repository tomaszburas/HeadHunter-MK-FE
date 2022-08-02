import {FormEvent, useState} from 'react';
import {Header} from '../../components/Header';
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
import {ContractType} from '../../types/enums/ContractType';
import {WorkType} from '../../types/enums/WorkType';
import {validationArrayUrl} from '../../utils/validationUrl';
import {Internships} from '../../types/enums/Internships';

export const StudentEdit = () => {
  const [about, setAbout] = useState<AboutMeInterface>({
    bio: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordRepeat: '',
    tel: '',
    githubUsername: '',
  });
  const [employment, setEmployment] = useState<EmploymentInterface>({
    targetWorkCity: '',
    expectedContractType: ContractType.WHATEVER,
    monthsOfCommercialExp: 0,
    canTakeApprenticeship: Internships.YES,
    expectedSalary: 0,
    expectedTypeWork: WorkType.WHATEVER,
  });
  const [education, setEducation] = useState('');
  const [courses, setCourses] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [portfolioUrls, setPortfolioUrls] = useState<string[]>(['']);
  const [scrumUrls, setScrumUrls] = useState<string[]>(['']);
  const [projectUrls, setProjectUrls] = useState<string[]>(['']);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const obj = {
      ...about,
      ...employment,
      education,
      courses,
      workExperience,
      portfolioUrls: portfolioUrls.filter((el) => el !== ''),
      scrumUrls: scrumUrls.filter((el) => el !== ''),
      projectUrls: projectUrls.filter((el) => el !== ''),
    };

    console.log(obj);
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
    <Form onSubmit={handleForm}>
      <Header />

      <About state={about} setState={setAbout} />
      <Employment state={employment} setState={setEmployment} />
      <Education state={education} setState={setEducation} />
      <Courses state={courses} setState={setCourses} />
      <Experience state={workExperience} setState={setWorkExperience} />
      <Portfolio state={portfolioUrls} setState={setPortfolioUrls} />
      <Scrum state={scrumUrls} setState={setScrumUrls} />
      <Project state={projectUrls} setState={setProjectUrls} />

      <ButtonContainer>
        <Button text="Zapisz" type="submit" />
      </ButtonContainer>
    </Form>
  );
};
