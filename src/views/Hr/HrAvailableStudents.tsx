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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {searchName} from '../../redux/features/searchBarSlice';
import {AvailableStudentsInterface} from '../../types/interfaces/Hr/AvailableStudentsInterface';

export const HrAvailableStudents = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<AvailableStudentsInterface[] | null>(
    null
  );
  const [movedStudent, setMovedStudent] = useState<boolean>(false);
  const [allStudents, setAllStudents] = useState<AvailableStudentsInterface[]>(
    []
  );
  const {name} = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchAllAvailableUsers(
        itemsOnPage,
        page,
        id as string
      );
      if (data.success) {
        setStudents(data.students);
        setAllStudents(data.allStudents);
        setPages(data.pages);
      } else {
        setStudents([]);
      }
    })();
  }, [page, itemsOnPage, pages, movedStudent]);

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
