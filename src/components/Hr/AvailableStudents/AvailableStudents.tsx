import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {AvailableStudent} from './AvailableStudent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import styled from 'styled-components';
import {MiniLoader} from '../../MiniLoader';
import {AvailableStudentsInterface} from '../../../types/interfaces/Hr/AvailableStudentsInterface';

interface Props {
  students: AvailableStudentsInterface[] | null;
  setStudents: (
    value: (
      prev: AvailableStudentsInterface[] | null
    ) => AvailableStudentsInterface[] | null
  ) => void;
  setMovedStudent: (value: (prev: boolean) => boolean) => void;
  allStudents: AvailableStudentsInterface[];
}

export const AvailableStudents = ({
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
          allStudents?.filter((item: any) =>
            item.firstName?.toLowerCase().includes(name)
          ).length === 0 ? (
            <NoData>Brak kursantów</NoData>
          ) : (
            allStudents
              .filter((item) => item.firstName?.toLowerCase().includes(name))
              .map((student) => (
                <AvailableStudent
                  key={student.id}
                  student={student}
                  setStudents={setStudents}
                  setMovedStudent={setMovedStudent}
                />
              ))
          )
        ) : (
          students.map((student) => (
            <AvailableStudent
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
