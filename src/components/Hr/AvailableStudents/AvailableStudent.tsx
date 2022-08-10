import styled from 'styled-components';
import {Button} from '../../Button';
import {useState} from 'react';
import {StudentInfo} from '../StudentInfo';
import {UnderlineHr} from '../../../assets/styled/Hr/UnderlineHr';
import {AllAvailableUsers} from '../../../types/interfaces/Student/EmploymentInterface';
import {API_URL} from '../../../config';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';

export const AvailableStudent = (user: AllAvailableUsers) => {
  const [isOpen, setIsOpen] = useState(false);
  const {id} = useSelector((store: RootState) => store.auth);

  //useCallback?

  const addToTalk = async () => {
    await fetch(`${API_URL}/hr/addToTalk/${id}/${user.id}`, {
      credentials: 'include',
      mode: 'cors',
    });
  };

  return (
    <>
      <Wrapper>
        <p className="student-name">{`${user.firstName} ${user.lastName.slice(
          0,
          1
        )}.`}</p>
        <div className="student-nav">
          <Button text="Zarezerwuj rozmowę" onClick={addToTalk} />
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
      <StudentInfo isOpen={isOpen} user={user} />
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
