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
