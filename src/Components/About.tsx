import React from "react";
import { Carousel } from "flowbite-react";
const About = () => {
  return (
    <div className="flex flex-col flex-1 justify-center gap-[120px] items-center">
      <h1>About Me</h1>
      <div className="w-full h-[800px]">
        <Carousel slideInterval={5000}>
          {/* <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          /> */}
          <div className="flex flex-col items-center gap-[15px]">
            <h2>이름</h2>
            <h3>지인성</h3>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <h2>생년 월일</h2>
            <h3>1996.04.17</h3>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <h2>주소지</h2>
            <h3>경기도 용인시</h3>
          </div>
          <div>
            <div className="flex flex-col items-center gap-[15px]">
              <h2>연락처</h2>
              <h3>010-1234-5678</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <h2>이메일</h2>
            <h3>crm03008@gmail.com</h3>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <h2>학력</h2>
            <h3>단국대학교 (소프트웨어학과)</h3>
          </div>
        </Carousel>
      </div>
      {/* <div className="w-full h-[600px] grid grid-cols-3 place-items-center"></div> */}
      <div>문의사항이 있으시다면 편하게 연락주세요</div>
    </div>
  );
};

export default About;
