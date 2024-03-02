import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import MainPage from "@/Components/Main";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  useEffect(() => {
    setScreenSize();
  }, []); //처음 마운트될때 값을 계산하도록 함수를 호출한다

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden min-w-[600px]">
      <Router>
        <Header />
        <div className="flex flex-col flex-1 mx-48">
          <Routes>
            {" "}
            <Route path="/" Component={MainPage} />
            {/* <Route path="/maincontent2" component={MainContent2} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
