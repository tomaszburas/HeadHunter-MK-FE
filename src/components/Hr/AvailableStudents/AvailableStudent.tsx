import styled from 'styled-components';
import {Button} from '../../Button';
import {useState} from 'react';
import {StudentInfo} from '../StudentInfo';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import {API_URL} from '../../../config';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {toast} from 'react-toastify';
import {AvailableStudentsInterface} from '../../../types/interfaces/Hr/AvailableStudentsInterface';

interface Props {
  student: AvailableStudentsInterface;
  setStudents: (
    value: (
      prev: AvailableStudentsInterface[] | null
    ) => AvailableStudentsInterface[] | null
  ) => void;
  setMovedStudent: (value: (prev: boolean) => boolean) => void;
}

export const AvailableStudent = ({
  student,
  setStudents,
  setMovedStudent,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {id} = useSelector((store: RootState) => store.auth);

  const addToTalk = async () => {
    const res = await fetch(`${API_URL}/hr/add-to-talk/${id}/${student.id}`, {
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      setStudents((prev: AvailableStudentsInterface[] | null) => {
        if (prev !== null) {
          return [...prev].filter((el) => el.id !== student.id);
        }
        return null;
      });

      if (setMovedStudent) {
        setMovedStudent((prev: boolean) => !prev);
      }
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Wrapper>
        <p className="student-name" onClick={() => setIsOpen(!isOpen)}>{`${
          student.firstName
        } ${student.lastName.slice(0, 1)}.`}</p>
        <div className="student-nav">
          <Button text="Zarezerwuj rozmowę" onClick={() => addToTalk()} />
          {!isOpen ? (
            <i
              className="bx bx-chevron-down"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <i
              className="bx bx-chevron-up"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </Wrapper>
      <StudentInfo isOpen={isOpen} student={student} />
      <UnderlineHr />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.paddingSize.base} 0;

  button {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  .student-name {
    padding-left: ${(props) => props.theme.paddingSize.sm};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }

  .student-nav {
    display: flex;
    align-items: center;

    .bx-chevron-up,
    .bx-chevron-down {
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.base};
      cursor: pointer;
    }
  }
`;
