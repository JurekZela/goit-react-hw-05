import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
color: white;
text-decoration: none;
padding: 5px;

&:hover {
 color: yellow;
  }
`;

export const Header = styled.header`
  padding-bottom: 15px;
  border-bottom: 1px solid white;
`;