import styled from 'styled-components';
import {Select} from '../../../assets/styled/Select';
import {ChangeEvent, useEffect} from 'react';
import {ItemsOnPageEnum} from '../../../types/enums/ItemsOnPageEnum';

interface Props {
  page: number;
  pages: number;
  itemsOnPage: ItemsOnPageEnum;
  setPage: (value: number) => void;
  setItemsOnPage: (value: ItemsOnPageEnum) => void;
}

export const Pagination = ({
  page,
  pages,
  itemsOnPage,
  setPage,
  setItemsOnPage,
}: Props) => {
  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    if (pages === page) {
      setPage(pages);
    }
  }, [page, pages, setPage, setItemsOnPage]);

  const clickUp = () => {
    if (pages === 0) {
      pages = 1;
    }

    if (page === pages) {
      return;
    } else {
      setPage(page + 1);
    }
  };

  const clickDown = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const handleItemsOnPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setItemsOnPage(Number(e.target.value));
  };

  return (
    <Container>
      <p className="pagination-title">Ilość elementów:</p>
      <div className="select-box">
        <Select
          onChange={(e) => handleItemsOnPage(e)}
          value={itemsOnPage}
          name="perPage"
        >
          <option value={ItemsOnPageEnum.ONE}>{ItemsOnPageEnum.ONE}</option>
          <option value={ItemsOnPageEnum.TWO}>{ItemsOnPageEnum.TWO}</option>
          <option value={ItemsOnPageEnum.THREE}>{ItemsOnPageEnum.THREE}</option>
        </Select>
      </div>
      <p className="pagination-info">
        {page} z {pages === 0 ? '1' : pages}
      </p>
      <i className="bx bxs-left-arrow-square" onClick={clickDown} />
      <i className="bx bxs-right-arrow-square" onClick={clickUp} />
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
