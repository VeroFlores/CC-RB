import styled from 'styled-components';

export const Container = styled.section`
margin:15px 0px;
width:100%;
`;
export const Button = styled.button`
border-style:none;
align-self: flex-end;
background-color: #fff;
color: #1976d2;
padding: 0px;
`;
export const TableTittle = styled.h2`
font-size:25px;

`;
export const List = styled.ul`
padding:0px;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Item = styled.div`
text-decoration:none;
list-style:none;
display: flex;
flex-direction: row;
align-items: center;
margin:10px;

`;
export const Subtitle = styled.h4`
font-size:15px;
`;
export const Table = styled.div`
display:flex;
flex-direction:column;
`;
export const Div = styled.div`
display:flex;
flex-direction:row;
margin-left: 30px;
`;
export const IsActive = styled.div`
display:none;
visibility: ${(props) => (props.shown ? 'visible' : 'hidden')};
@media (min-width: 1200px) {
display:block;
  }
`;
