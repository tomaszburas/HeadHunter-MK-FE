import {FormEvent, useState} from 'react';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {Form} from '../../assets/styled/StudentAccountEdit/Form';
import {AboutMe} from '../../components/Student/StudentEdit/AboutMe';
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
import {Contract} from '../../types/enums/Contract';
import {Workplace} from '../../types/enums/Workplace';
import {validationArrayUrl} from '../../utils/validationUrl';

export const StudentEdit = () => {
  const [aboutMe, setAboutMe] = useState<AboutMeInterface>({
    aboutMe: '',
    email: '',
    fullName: '',
    password: '',
    passwordRepeat: '',
    phone: '',
    usernameGh: '',
  });
  const [employment, setEmployment] = useState<EmploymentInterface>({
    city: '',
    contract: Contract.PERMANENT,
    experience: '',
    internships: '',
    salary: '',
    workplace: Workplace.REMOTE,
  });
  const [education, setEducation] = useState('');
  const [course, setCourse] = useState('');
  const [experience, setExperience] = useState('');
  const [linkPortfolio, setLinkPortfolio] = useState<string[]>(['']);
  const [linkScrum, setLinkScrum] = useState<string[]>(['']);
  const [linkProject, setLinkProject] = useState<string[]>(['']);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const obj = {
      aboutMe,
      employment,
      education,
      course,
      experience,
      linkPortfolio: linkPortfolio.filter((el) => el !== ''),
      linkScrum: linkScrum.filter((el) => el !== ''),
      linkProject: linkProject.filter((el) => el !== ''),
    };

    console.log(obj);
  };

  const validate = (): boolean => {
    // ABOUT ME
    if (aboutMe.fullName.length <= 0) {
      toast.error('Wpisz swoje imię i nazwisko');
      return false;
    }

    if (aboutMe.email.length <= 0) {
      toast.error('Wpisz swój email');
      return false;
    }

    if (aboutMe.phone.length <= 0) {
      toast.error('Wpisz swój telefon');
      return false;
    }

    if (aboutMe.password.length > 0 && !validationPassword(aboutMe.password)) {
      toast.error(
        'Hasło musi zawierać min. 5 znaków, przynajmniej jedną cyfrę oraz jedną wielką literę'
      );
      return false;
    }

    if (aboutMe.password.length > 0) {
      if (aboutMe.password !== aboutMe.passwordRepeat) {
        toast.error('Podane hasła różnią się');
        return false;
      }
    }

    if (!validationEmail(aboutMe.email)) {
      toast.error('Niepoprawny adres email');
      return false;
    }

    // EMPLOYMENT
    if (employment.workplace.length <= 0) {
      toast.error('Zaznacz preferowane miejsce pracy');
      return false;
    }

    if (employment.contract.length <= 0) {
      toast.error('Zaznacz typ kontraktu');
      return false;
    }

    if (employment.experience < 0) {
      toast.error('Wpisz swoje doświadczenie komercyjne w programowaniu');
      return false;
    }

    if (employment.city.length <= 0) {
      toast.error('Wpisz miasto w którym chcesz pracować');
      return false;
    }

    if (employment.salary <= 0) {
      toast.error('Wpisz oczekiwane wynagrodzenie netto');
      return false;
    }

    if (employment.workplace.length <= 0) {
      toast.error('Zaznacz czy chcesz odbyć bezpłatne praktyki/staż');
      return false;
    }

    // PORTFOLIO URL
    if (!validationArrayUrl(linkPortfolio, setLinkPortfolio)) {
      toast.error(
        `Wpisz poprawne adresy url w portfolio np. https://nazwa.com`
      );
      return false;
    }

    // SCRUM URL
    if (!validationArrayUrl(linkScrum, setLinkScrum)) {
      toast.error(`Wpisz poprawne adresy url w Scrum np. https://nazwa.com`);
      return false;
    }

    // PROJECT URL
    if (!validationArrayUrl(linkProject, setLinkProject)) {
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

      <AboutMe state={aboutMe} setState={setAboutMe} />
      <Employment state={employment} setState={setEmployment} />
      <Education state={education} setState={setEducation} />
      <Courses state={course} setState={setCourse} />
      <Experience state={experience} setState={setExperience} />
      <Portfolio state={linkPortfolio} setState={setLinkPortfolio} />
      <Scrum state={linkScrum} setState={setLinkScrum} />
      <Project state={linkProject} setState={setLinkProject} />

      <ButtonContainer>
        <Button text="Zapisz" type="submit" />
      </ButtonContainer>
    </Form>
  );
};
