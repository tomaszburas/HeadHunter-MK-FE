import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {ToTalkStudent} from './ToTalkStudent';
import {StudentState} from '../../../redux/features/studentSlice';
import styled from 'styled-components';
import {MiniLoader} from '../../MiniLoader';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {AllAvailableUsers} from "../../../types/interfaces/Student/EmploymentInterface";

interface Props {
  students: StudentState[] | null;
}

export const ToTalkStudents = ({students}: Props) => {
  const {name} = useSelector((state: RootState) => state.name);

  return (
    <ContainerHrStudents>
      {students !== null ? (
        students.length === 0 ? (
          <NoData>Brak kursantów</NoData>
        ) : (
          students
            .filter((item) => item.firstName?.toLowerCase().includes(name))
            .map((user) => (
              <ToTalkStudent
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                githubUsername={user.githubUsername}
                lastName={user.lastName}
                addedDate={user.dateAdded as Date}
                user={user as AllAvailableUsers}
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
