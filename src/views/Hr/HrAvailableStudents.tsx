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
import {API_URL} from '../../config';
import {toast} from 'react-toastify';

export const HrAvailableStudents = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<StudentState[] | null>(null);
  const [movedStudent, setMovedStudent] = useState<boolean>(false);

  const [filtration, setFiltration] = useState(false);
  const [params, setParams] = useState('');
  const [openFiltration, setOpenFiltration] = useState(false);

  useEffect(() => {
    (async () => {
      if (filtration) {
        const res = await fetch(
          `${API_URL}/hr/filter-available/${page}/${itemsOnPage}/${id}?${params}`,
          {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
          }
        );

        const data = await res.json();

        console.log(data);

        if (data.success) {
          if (data.students.length === 0) {
            toast.error('Nie wyszukano kursantów z podanymi kryteriami');
            return;
          }
          setStudents(data.students);
          setPages(data.pages);
          setOpenFiltration(false);
        } else {
          toast.error(data.message);
        }
        console.log('eee');
        setFiltration(false);
      } else {
        const data = await fetchAllAvailableUsers(
          itemsOnPage,
          page,
          id as string
        );
        if (data.success) {
          setStudents(data.users);
          setPages(data.pages);
        } else {
          setStudents([]);
        }
      }
    })();
  }, [page, itemsOnPage, pages, movedStudent]);

  return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr
          setFiltration={setFiltration}
          setParams={setParams}
          openFiltration={openFiltration}
          setOpenFiltration={setOpenFiltration}
        />
        <AvailableStudents
          students={students}
          setStudents={setStudents}
          setMovedStudent={setMovedStudent}
        />
      </WrapperHr>
      {students?.length !== 0 && (
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
