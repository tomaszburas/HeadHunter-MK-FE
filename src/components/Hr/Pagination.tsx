import styled from 'styled-components';
import {Select} from '../../assets/styled/Select';

export const Pagination = () => {
  return (
    <Container>
      <p className="pagination-title">Ilość elementów:</p>
      <div className="select-box">
        <Select name="perPage">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Select>
      </div>
      <p className="pagination-info">10 z 90</p>
      <i className="bx bxs-left-arrow-square" />
      <i className="bx bxs-right-arrow-square" />
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
`;
