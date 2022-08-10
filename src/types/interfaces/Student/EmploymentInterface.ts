import {WorkType} from '../../enums/WorkType';
import {ContractType} from '../../enums/ContractType';
import {Internships} from '../../enums/Internships';

export interface EmploymentInterface {
  expectedTypeWork: WorkType;
  expectedContractType: ContractType;
  monthsOfCommercialExp: number;
  targetWorkCity: string;
  expectedSalary: number;
  canTakeApprenticeship: Internships;
}

export interface AllAvailableUsers extends EmploymentInterface {
  id: string;
  firstName: string;
  lastName: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  date?: Date;
}

export interface Users {
  users: AllAvailableUsers[];
  pages?: number;
}
