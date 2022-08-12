import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {ToTalkStudent} from './ToTalkStudent';
import styled from 'styled-components';
import {MiniLoader} from '../../MiniLoader';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {ToTalksStudentsInterface} from '../../../types/interfaces/Hr/ToTalksStudentsInterface';

interface Props {
  students: ToTalksStudentsInterface[] | null;
  setStudents: (
    value: (
      prev: ToTalksStudentsInterface[] | null
    ) => ToTalksStudentsInterface[] | null
  ) => void;
  setMovedStudent: (value: (prev: boolean) => boolean) => void;
  allStudents: ToTalksStudentsInterface[];
}

export const ToTalkStudents = ({
  students,
  setStudents,
  setMovedStudent,
  allStudents,
}: Props) => {
  const {name} = useSelector((state: RootState) => state.name);

  return (
    <ContainerHrStudents>
      {students !== null ? (
        students?.length === 0 ? (
          <NoData>Brak kursantów</NoData>
        ) : name.length > 0 ? (
          allStudents?.filter((item) =>
            item.firstName?.toLowerCase().includes(name)
          ).length === 0 ? (
            <NoData>Brak kursantów</NoData>
          ) : (
            allStudents
              .filter((item) => item.firstName?.toLowerCase().includes(name))
              .map((student) => (
                <ToTalkStudent
                  key={student.id}
                  student={student}
                  setStudents={setStudents}
                  setMovedStudent={setMovedStudent}
                />
              ))
          )
        ) : (
          students
            .filter((item) => item.firstName?.toLowerCase().includes(name))
            .map((student) => (
              <ToTalkStudent
                key={student.id}
                student={student}
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
