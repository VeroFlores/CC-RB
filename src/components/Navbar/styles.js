import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
background:#fcfcfc;
margin-top:30px;
display:flex;
flex-direction: row;
justify-content: space-evenly;
@media (min-width: 1200px) {
    flex-direction: column;
    justify-items: start;
    align-items: center;
    justify-content: flex-start;
    
}
`;
export const Link = styled(LinkRouter)`
background-color:#e4e4e4;
padding:10px;
text-decoration:none;
border-radius: 10px;
width: 20%;
text-align: center;
@media (min-width: 1200px) {
margin:40px 0px;
width:80%;
}
`;
