import { NavbarArea, NavbarItem } from "./style";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ open = true, books: { books }, set }) => {
  const navigate = useNavigate();

  let navbarItems = books.map((book) => ({
    url: `/${book.book_name}`,
    name: book.book_name,
  }));

  navbarItems.unshift({
    url: "/",
    name: "Inicio",
  });

  return (
    <NavbarArea open={open}>
      {navbarItems.length > 0 ? (
        navbarItems.map((item, index) => (
          <NavbarItem
            open={open}
            key={index}
            onClick={() => {
              navigate(item.url);
              set(false);
            }}
          >
            {item.name}
          </NavbarItem>
        ))
      ) : (
        <NavbarItem>Carregando...</NavbarItem>
      )}
    </NavbarArea>
  );
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
