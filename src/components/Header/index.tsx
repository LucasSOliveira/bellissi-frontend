import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import logo from "../../assets/images/logo.svg";
import "./header.scss";

const Header = () => {
  const currentPath = useLocation().pathname;
  const currentPathClass = (pathname: string): string =>
    `${pathname === currentPath ? "pathActive" : ""}`;

  function openMenu() {
    const menu: any = window.document.getElementById("header-menu");
    if (menu) {
      menu.classList.add("open");
    }
  }
  function closeMenu() {
    const menu: any = window.document.getElementById("header-menu");

    if (menu) {
      menu.classList.remove("open");
    }
  }
  function resetMenu(): void | any {
    closeMenu();
    window.scroll({ top: 0 });
  }

  return (
    <header className="header w-full py-2" id="header">
      <div className="container flex justify-between align-center">
        <Link to="/">
          <img className="header--logo" src={logo} alt="logo" />
        </Link>
        <button onClick={openMenu} className="header--button-menu"></button>
        <div className="header--menu" id="header-menu">
          <button onClick={closeMenu} className="header--menu-close"></button>
          <nav>
            <ul>
              {routes.map((router, index) => (
                <li onClick={resetMenu} key={index}>
                  <Link
                    className={currentPathClass(router.pathname)}
                    to={router.pathname}
                  >
                    {router.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
