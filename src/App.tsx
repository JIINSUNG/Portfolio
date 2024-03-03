import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import MainPage from "@/Components/Main";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Study from "@/Components/Study";
import Contact from "@/Components/Contact";
import Skill from "@/Components/Skill";

const App = () => {
  return (
    <Flowbite>
      <div className="flex flex-col h-screen overflow-x-hidden min-w-[600px]">
        <div className="absolute top-0 right-0 mt-[10px] mr-[10px]">
          <DarkThemeToggle />
        </div>
        <Router>
          <Header />
          <div className="flex flex-col flex-1 lg:mx-48">
            <Routes>
              <Route path="/" Component={MainPage} />
              <Route path="/about" Component={About} />
              <Route path="/projects" Component={Projects} />
              <Route path="/study" Component={Study} />
              <Route path="/skill" Component={Skill} />
              <Route path="/contact" Component={Contact} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </Flowbite>
  );
};

export default App;
