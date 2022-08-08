import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {AvailableStudent} from './AvailableStudent';
import {Users} from "../../../types/interfaces/Student/EmploymentInterface";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux";


export const AvailableStudents = (users: Users) => {
  const {name} = useSelector((state: RootState) => state.name);
  return (
    <ContainerHrStudents>
        {users.users?.filter((item) => (item.name.toLowerCase()).includes(name.trim()))
          .map((item) => (
            <AvailableStudent key={item.id}
                              id={item.id}
                              canTakeApprenticeship={item.canTakeApprenticeship}
                              expectedContractType={item.expectedContractType}
                              expectedSalary={item.expectedSalary}
                              expectedTypeWork={item.expectedTypeWork}
                              name={item.name}
                              lastName={item.lastName}
                              monthsOfCommercialExp={item.monthsOfCommercialExp}
                              targetWorkCity={item.targetWorkCity}
                              courseCompletion={item.courseCompletion}
                              courseEngagment={item.courseEngagment}
                              projectDegree={item.projectDegree}
                              teamProjectDegree={item.teamProjectDegree}

            />
        ))}
    </ContainerHrStudents>
  );
};
