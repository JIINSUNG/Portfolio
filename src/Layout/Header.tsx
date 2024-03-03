import { Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <header className="flex items-center h-24 lg:px-48 bg-white dark:bg-[#121212]">
      <div className="flex w-full justify-between dark:text-white">
        <h2>Insung's Portfolio</h2>

        <ul className="flex gap-[24px] items-center text-[20px] max-lg:hidden ">
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
            <Link to="/skill">Skill</Link>
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
