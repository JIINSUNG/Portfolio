import React from "react";
import { Card } from "flowbite-react";

const Skill = () => {
  return (
    <div className="flex flex-col lg:px-48 bg-yellow-100">
      <h1 className="text-center">My Skill</h1>
      <div className="min-w-[360px] grid grid-cols-3 max-lg:grid-cols-2 gap-[1rem] items-start place-items-center py-[50px]">
        <Card className="row-span-3 w-[250px] ">
          <h2>Frontend</h2>
          <hr />
          <h2>HTML CSS JS</h2>
          <h2>Typescript</h2>
          <h2>NEXT</h2>
          <h2>Vue</h2>
          <h2>React</h2>
          <h2>상태관리</h2>
          <hr />
          <h2>zustand</h2>
          <h2>Redux</h2>
          <h2>Redux toolkit</h2>
          <h2>ReactQuery</h2>
          <h2>Pinia</h2>
          <h2>스타일</h2>
          <hr />
          <h2>Tailwind</h2>
          <h2>Styled Components</h2>
          <h2>BootStrap</h2>
          <h2>Flowbite</h2>

          <h2>테스팅</h2>
          <hr />
          <h2>Jest</h2>
          <h2>Vitest (In Studying)</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Backend</h2>
          <hr />
          <h2>express</h2>
          <h2>spring</h2>
          <h2>spring boot</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Communication</h2>
          <hr />
          <h2>Jira</h2>
          <h2>Figma</h2>
          <h2>Matter Most</h2>
          <h2>Slack</h2>
          <h2>YouTrack</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Version Control</h2>
          <hr />
          <h2>git</h2>
          <h2>github</h2>
          <h2>gitlab</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Deployment</h2>
          <hr />
          <h2>netlify</h2>
          <h2>vercel</h2>
          <h2>aws</h2>
          <h2>nginX</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Certificate</h2>
          <hr />
          <h2>정보처리기사</h2>
          <h2>SQLD</h2>
        </Card>
        <Card className="w-[250px]">
          <h2>Language</h2>
          <hr />
          <h2>Java</h2>
          <h2>Typescript</h2>
          <h2>Javascript</h2>
          <h2>Python</h2>
          <h2>SQL</h2>
          <h2>HTML</h2>
          <h2>C#</h2>
        </Card>
      </div>
    </div>
  );
};

export default Skill;
