import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Select} from '../../assets/styled/Select';
import {RootState} from "../../redux";
import {setPage, setPagination} from "../../redux/features/paginationSlice";
import {useEffect} from "react";



export const Pagination = () => {
    const itemsOnPage = useSelector((state: RootState) => state.pagination.itemsOnPage);
    const page = useSelector((state: RootState) => state.pagination.page);
    const pages = useSelector((state: RootState) => state.pagination.totalPages);
    const dispatch = useDispatch();

    useEffect(() => {
        if(page === 0 || page < 0) {
            dispatch(setPage({page: 1}))
        }
        if(pages === page) {
            dispatch(setPage({page: pages}))
        }
    }, [page])

    const click = () => {
        if(page === pages) {
            return;
        } else {
            dispatch(setPage({page: page + 1}));
        }

    }
  return (
    <Container>
      <p className="pagination-title">Ilość elementów:</p>
      <div className="select-box">
        <Select onChange={(e) => dispatch(setPagination({pagination: e.target.value}))} name="perPage">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
      <p className="pagination-info">{page} z {pages}</p>
      <i className="bx bxs-left-arrow-square" onClick={() => dispatch(setPage({page: page - 1}))}/>
      <i className="bx bxs-right-arrow-square"  onClick={() => click()}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-bottom: ${(props) => props.theme.marginSize.base};

  .pagination-title,
  .select-box,
  .pagination-info {
    margin-right: ${(props) => props.theme.marginSize.sm};
  }

  .bxs-left-arrow-square,
  .bxs-right-arrow-square {
    font-size: ${(props) => props.theme.fontSize.base};
    cursor: pointer;
  }
  @media only screen and (max-width: 1200px) {
    margin-right: ${(props) => props.theme.marginSize.base};
  }
`;
