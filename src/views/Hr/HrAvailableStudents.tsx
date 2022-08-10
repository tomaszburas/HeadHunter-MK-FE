import {Header} from '../../components/Header/Header';
import {NavHr} from '../../components/Hr/NavHr';
import {AvailableStudents} from '../../components/Hr/AvailableStudents/AvailableStudents';
import {UtilsHr} from '../../components/Hr/UtilsHr';
import {Pagination} from '../../components/Hr/Pagination/Pagination';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import {useEffect, useMemo, useState} from 'react';
import {fetchAllAvailableUsers} from '../../utils/fetch/fetchAllAvailableUsers';
import {ItemsOnPageEnum} from '../../types/enums/ItemsOnPageEnum';
import {StudentState} from '../../redux/features/studentSlice';

export const HrAvailableStudents = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<StudentState[] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchAllAvailableUsers(+itemsOnPage, page);

      if (data.success) {
        setStudents(data.users);
        setPages(data.pages);
      } else {
        setStudents([]);
      }
    })();
  }, [page, itemsOnPage, pages, students]);

  return (
    <>q
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr />
        <AvailableStudents students={students} />
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
