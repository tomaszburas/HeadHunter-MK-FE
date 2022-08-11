import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {AvailableStudent} from './AvailableStudent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import styled from 'styled-components';
import {MiniLoader} from '../../MiniLoader';
import {StudentState} from '../../../redux/features/studentSlice';

interface Props {
  students: StudentState[] | null;
  setStudents: (
    value: (prev: StudentState[] | null) => StudentState[] | null
  ) => void;
  setMovedStudent: (value: (prev: boolean) => boolean) => void;
}

export const AvailableStudents = ({
  students,
  setStudents,
  setMovedStudent,
}: Props) => {
  const {name} = useSelector((state: RootState) => state.name);

  return (
    <ContainerHrStudents>
      {students !== null ? (
        students.length === 0 ? (
          <NoData>Brak kursantów</NoData>
        ) : (
          students
            .filter((item) => item.firstName?.toLowerCase().includes(name))
            .map((item) => (
              <AvailableStudent
                key={item.id}
                id={item.id}
                canTakeApprenticeship={item.canTakeApprenticeship}
                expectedContractType={item.expectedContractType}
                expectedSalary={item.expectedSalary}
                expectedTypeWork={item.expectedTypeWork}
                firstName={item.firstName}
                lastName={item.lastName}
                monthsOfCommercialExp={item.monthsOfCommercialExp}
                targetWorkCity={item.targetWorkCity}
                courseCompletion={item.courseCompletion}
                courseEngagement={item.courseEngagement}
                projectDegree={item.projectDegree}
                teamProjectDegree={item.teamProjectDegree}
                setStudents={setStudents}
                setMovedStudent={setMovedStudent}
              />
            ))
        )
      ) : (
        <NoData>
          <MiniLoader width={25} height={25} />
        </NoData>
      )}
    </ContainerHrStudents>
  );
};

const NoData = styled.div`
  padding-top: ${(props) => props.theme.paddingSize.base};
  text-align: center;
`;
