import "./NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Alexandru Sorbala</h1>
      <nav>
        <ul className="">
          <li className="">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="">
            <a href="#projects" onClick={() => handlePageChange("Projects")}>
              Projects
            </a>
          </li>
          <li className="">
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
