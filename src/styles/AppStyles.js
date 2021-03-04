import styled from 'styled-components';

export const Title = styled.h1`
text-align:center;
font-size:20px;
`;
export const Container = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 20% 80%;
    align-content: start;
    justify-content: start;
  }
`;
export default Title;
