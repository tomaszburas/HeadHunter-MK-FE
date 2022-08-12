import {Header} from '../../../components/Header/Header';
import {NavHr} from '../../../components/Hr/NavHr';
import {NavigationHr} from '../../../types/enums/NavigationHr';
import {UtilsHr} from '../../../components/Hr/UtilsHr';
import {ToTalkStudents} from '../../../components/Hr/ToTalkStudents/ToTalkStudents';
import {WrapperHr} from '../../../assets/styled/Hr/WrapperHr';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {useEffect, useState} from 'react';
import {fetchAllToTalkUsers} from '../../../utils/fetch/fetchAllToTalkUsers';
import {Pagination} from '../../../components/Hr/Pagination/Pagination';
import {ItemsOnPageEnum} from '../../../types/enums/ItemsOnPageEnum';
import {searchName} from '../../../redux/features/searchBarSlice';
import {ToTalksStudentsInterface} from '../../../types/interfaces/Hr/ToTalksStudentsInterface';

export const HrTTStudents = () => {
  const {id} = useSelector((store: RootState) => store.auth);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(ItemsOnPageEnum.ONE);
  const [students, setStudents] = useState<ToTalksStudentsInterface[] | null>(
    null
  );
  const [movedStudent, setMovedStudent] = useState<boolean>(false);
  const [allStudents, setAllStudents] = useState<ToTalksStudentsInterface[]>(
    []
  );
  const {name} = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchAllToTalkUsers(itemsOnPage, page, id as string);
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
        <NavHr activeLink={NavigationHr.TO_TALK_STUDENTS} />
        <UtilsHr
          by={NavigationHr.TO_TALK_STUDENTS}
          page={page}
          itemsOnPage={itemsOnPage}
        />
        <ToTalkStudents
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
