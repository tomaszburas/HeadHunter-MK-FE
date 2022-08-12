import {WorkType} from '../../enums/WorkType';
import {ContractType} from '../../enums/ContractType';
import {Internships} from '../../enums/Internships';

export interface AvailableStudentsInterface {
  id: string;
  firstName: string;
  lastName: string;
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
}
