import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useEffect, useState} from 'react';
import {ItemsOnPageEnum} from '../../types/enums/ItemsOnPageEnum';
import {StudentState} from '../../redux/features/studentSlice';
import {Header} from '../../components/Header/Header';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import {NavHr} from '../../components/Hr/NavHr';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {UtilsHr} from '../../components/Hr/UtilsHr';
import {AvailableStudents} from '../../components/Hr/AvailableStudents/AvailableStudents';
import {Pagination} from '../../components/Hr/Pagination/Pagination';
import {API_URL} from '../../config';
import {toast} from 'react-toastify';
import {useSearchParams} from 'react-router-dom';

export const HrTTStudentsFilter = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<StudentState[] | null>(null);
  const [movedStudent, setMovedStudent] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${API_URL}/hr/filter-to-talk/${page}/${itemsOnPage}/${id}?${searchParams.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
        }
      );

      const data = await res.json();

      if (data.success) {
        if (data.students.length === 0) {
          setStudents([]);
          return;
        }
        setStudents(data.students);
        setPages(data.pages);
      } else {
        toast.error(data.message);
      }
    })();
  }, [page, itemsOnPage, pages, movedStudent, searchParams]);

  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.TO_TALK_STUDENTS} />
        <UtilsHr
          by={NavigationHr.TO_TALK_STUDENTS}
          filter={true}
          page={page}
          itemsOnPage={itemsOnPage}
        />
        <AvailableStudents
          students={students}
          setStudents={setStudents}
          setMovedStudent={setMovedStudent}
        />
      </WrapperHr>
      {students?.length !== 0 && students !== null && (
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
