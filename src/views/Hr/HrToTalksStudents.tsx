import {Header} from '../../components/Header/Header';
import {NavHr} from '../../components/Hr/NavHr';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {UtilsHr} from '../../components/Hr/UtilsHr';
import {ToTalkStudents} from '../../components/Hr/ToTalkStudents/ToTalkStudents';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useEffect, useState} from 'react';
import {fetchAllToTalkUsers} from '../../utils/fetch/fetchAllToTalkUsers';
import {Pagination} from '../../components/Hr/Pagination/Pagination';
import {ItemsOnPageEnum} from '../../types/enums/ItemsOnPageEnum';
import {StudentState} from '../../redux/features/studentSlice';

export const HrTTStudents = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<StudentState[] | null>(null);
  const [movedStudent, setMovedStudent] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await fetchAllToTalkUsers(+itemsOnPage, page, id as string);
      if (data.success) {
        setStudents(data.users);
        setPages(data.pages);
      } else {
        setStudents([]);
      }
    })();
  }, [page, itemsOnPage, pages, movedStudent]);

  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.TO_TALK_STUDENTS} />
        <UtilsHr />
        <ToTalkStudents
          students={students}
          setStudents={setStudents}
          setMovedStudent={setMovedStudent}
        />
      </WrapperHr>
      {pages !== 0 && (
        <Pagination
          page={page}
          pages={pages}
          itemsOnPage={itemsOnPage}
          setPage={setPage}
          setItemsOnPage={setItemsOnPage}
        />
      )}
    </>
  );
};
