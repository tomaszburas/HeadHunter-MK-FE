import {ContainerHrStudents} from '../../../assets/styled/Hr/ContainerHrStudents';
import {ToTalkStudent} from './ToTalkStudent';
import {StudentState} from "../../../redux/features/studentSlice";
import {useEffect, useState} from "react";
import {API_URL} from "../../../config";

export const ToTalkStudents = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/hr/interested`, {
        credentials: 'include',
        mode: 'cors'
      })
      const data = await res.json();
      setUsers(data);
    })();
  }, [])


  console.log(users)

  return (
    <ContainerHrStudents>
        {users.map((user: StudentState) =>
            <ToTalkStudent firstName={user.firstName} githubUsername={user.githubUsername as string} lastName={user.lastName} addedDate={user.dateAdded as Date}/>
        )}
    </ContainerHrStudents>
  );
};
