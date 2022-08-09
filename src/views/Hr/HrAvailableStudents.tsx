import {Header} from '../../components/Header/Header';
import {NavHr} from '../../components/Hr/NavHr';
import {AvailableStudents} from '../../components/Hr/AvailableStudents/AvailableStudents';
import {UtilsHr} from '../../components/Hr/UtilsHr';
import {Pagination} from '../../components/Hr/Pagination';
import {NavigationHr} from '../../types/enums/NavigationHr';
import {WrapperHr} from '../../assets/styled/Hr/WrapperHr';
import {useEffect, useState} from "react";
import {AllAvailableUsers, Users} from "../../types/interfaces/Student/EmploymentInterface";
import {fetchAllAvailableUsers} from "../../utils/fetch/fetchAllAvailableUsers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";
import {setTotalPages} from "../../redux/features/paginationSlice";

export const HrAvailableStudents = () => {
    const [allAvailableUsers, setAllAvailableUsers] = useState<Users | null>(null);
    const itemsOnPage = useSelector((state: RootState) => state.pagination.itemsOnPage);
    const page = useSelector((state: RootState) => state.pagination.page);
    const pages = useSelector((state: RootState) => state.pagination.totalPages);
    const addedToTalk = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();


    console.log(addedToTalk)

    useEffect(() => {
        (async () => {
            const all = await fetchAllAvailableUsers(+itemsOnPage, page);
            setAllAvailableUsers(all);
            dispatch(setTotalPages({pages: all.pages}))

        })();
    }, [page, itemsOnPage, pages, addedToTalk]);


     return (
    <>
      <Header />
      <WrapperHr>
        <NavHr activeLink={NavigationHr.AVAILABLE_STUDENTS} />
        <UtilsHr/>
        <AvailableStudents users={allAvailableUsers?.users as AllAvailableUsers[]}/>
      </WrapperHr>
      <Pagination />
    </>
  );
};
