import {Header} from '../../components/Header/Header';
import {NavHr} from '../../components/Hr/NavHr';
import {AvailableStudents} from '../../components/Hr/AvailableStudents/AvailableStudents';
import {UtilsHr} from '../../components/Hr/UtilsHr';
import {Pagination} from '../../components/Hr/Pagination/Pagination';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import {useEffect, useState} from 'react';
import {fetchAllAvailableUsers} from '../../utils/fetch/fetchAllAvailableUsers';
import {ItemsOnPageEnum} from '../../types/enums/ItemsOnPageEnum';
import {StudentState} from '../../redux/features/studentSlice';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';

export const HrAvailableStudents = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<StudentState[] | null>(null);
  const [movedStudent, setMovedStudent] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await fetchAllAvailableUsers(
        +itemsOnPage,
        page,
        id as string
      );

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
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr />
        <AvailableStudents
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
