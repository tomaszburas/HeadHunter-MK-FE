import {Workplace} from '../../enums/Workplace';
import {Contract} from '../../enums/Contract';
import {Internships} from '../../enums/Internships';

export interface EmploymentInterface {
  workplace: Workplace;
  contract: Contract;
  experience: '' | number;
  city: string;
  salary: '' | number;
  internships: '' | Internships;
}
