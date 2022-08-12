import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useEffect, useState} from 'react';
import {ItemsOnPageEnum} from '../../types/enums/ItemsOnPageEnum';
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
import {searchName} from '../../redux/features/searchBarSlice';
import {AvailableStudentsInterface} from '../../types/interfaces/Hr/AvailableStudentsInterface';

export const HrAvailableStudentsFilter = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<AvailableStudentsInterface[] | null>(
    null
  );
  const [movedStudent, setMovedStudent] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [allStudents, setAllStudents] = useState<AvailableStudentsInterface[]>(
    []
  );
  const {name} = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${API_URL}/hr/filter-available/${page}/${itemsOnPage}/${id}?${searchParams.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
        }
      );

      const data = await res.json();

      console.log(data.allStudents);

      if (data.success) {
        if (data.students.length === 0) {
          setStudents([]);
          return;
        }
        setStudents(data.students);
        setAllStudents(data.allStudents);
        setPages(data.pages);
      } else {
        toast.error(data.message);
      }
    })();
  }, [page, itemsOnPage, pages, movedStudent, searchParams]);

  useEffect(() => {
    dispatch(searchName({name: ''}));
  }, []);

  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr
          by={NavigationHr.AVAILABLE_STUDENTS}
          filter={true}
          page={page}
          itemsOnPage={itemsOnPage}
        />
        <AvailableStudents
          students={students}
          setStudents={setStudents}
          setMovedStudent={setMovedStudent}
          allStudents={allStudents}
        />
      </WrapperHr>
      {students?.length !== 0 && students !== null && name.length === 0 && (
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
