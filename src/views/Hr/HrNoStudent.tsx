import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const HrNoStudent = () => {
  return (
    <Container>
      <p className="title">Brak kursanta o podanym ID</p>
      <Link to="/hr/to-talk">
        <button className="back-btn">
          <i className="bx bx-chevrons-left" />
          Wróć
        </button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.paddingSize.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.base};
    margin-bottom: ${(props) => props.theme.marginSize.base};
  }

  .back-btn {
    background-color: ${(props) => props.theme.colors.darkBlue};
    padding: ${(props) => props.theme.paddingSize.sm};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;

    .bx-chevrons-left {
      font-size: ${(props) => props.theme.fontSize.sm};
    }
  }
`;
