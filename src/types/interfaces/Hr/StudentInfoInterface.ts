import {WorkType} from '../../enums/WorkType';
import {ContractType} from '../../enums/ContractType';
import {Internships} from '../../enums/Internships';

export interface StudentInfoInterface {
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
