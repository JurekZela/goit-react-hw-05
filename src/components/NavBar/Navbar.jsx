import { NavLinkStyled, Header } from './NavBar-styled';
 
 const Navbar = () => {
    return (
        <Header>
        <nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
    )
};

export default Navbar;