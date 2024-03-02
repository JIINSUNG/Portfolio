import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center h-24 mx-48">
      <div className="flex w-full justify-between">
        <h2>Insung's Portfolio</h2>

        <ul className="flex gap-[24px] text-[20px] max-lg:hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/study">Study</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
