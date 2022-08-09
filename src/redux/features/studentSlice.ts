import {createSlice} from '@reduxjs/toolkit';
import {WorkType} from '../../types/enums/WorkType';
import {ContractType} from '../../types/enums/ContractType';
import {Internships} from '../../types/enums/Internships';

export interface StudentState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  githubUsername: string;
  bio: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: WorkType;
  expectedContractType: ContractType;
  monthsOfCommercialExp: number;
  targetWorkCity: string;
  expectedSalary: number;
  canTakeApprenticeship: Internships;
  education: string;
  courses: string;
  workExperience: string;
  portfolioUrls: string[];
  scrumUrls: string[];
  projectUrls: string[];
  firstLogin: boolean;
  dateAdded?: Date;
  avatarUrl?: string;
  bonusProjectUrls?: string[];
  _id?: string;
}

const initialState: StudentState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  githubUsername: '',
  bio: '',
  courseCompletion: 0,
  courseEngagement: 0,
  projectDegree: 0,
  teamProjectDegree: 0,
  expectedTypeWork: WorkType.WHATEVER,
  expectedContractType: ContractType.WHATEVER,
  monthsOfCommercialExp: 0,
  targetWorkCity: '',
  expectedSalary: 0,
  canTakeApprenticeship: Internships.YES,
  education: '',
  courses: '',
  workExperience: '',
  portfolioUrls: [''],
  scrumUrls: [''],
  projectUrls: [''],
  firstLogin: true,
};

interface SetStudent {
  payload: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    githubUsername: string;
    bio: string;
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    expectedTypeWork: WorkType;
    expectedContractType: ContractType;
    monthsOfCommercialExp: number;
    targetWorkCity: string;
    expectedSalary: number;
    canTakeApprenticeship: Internships;
    education: string;
    courses: string;
    workExperience: string;
    portfolioUrls: string[];
    scrumUrls: string[];
    projectUrls: string[];
    firstLogin: boolean;
  };
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudent: (state, action: SetStudent) => {
      return {...action.payload};
    },
    setFirstLogin: (state, action) => {
      state.firstLogin = action.payload.firstLogin;
    },
  },
});

export const {setStudent, setFirstLogin} = studentSlice.actions;
