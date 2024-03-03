import React from "react";
import { Card } from "flowbite-react";

const Skill = () => {
  return (
    <div className="flex flex-col bg-red-300">
      <div className="flex flex-wrap gap-[1rem[">
        <Card>
          <h1>Frontend</h1>
          <hr />
          <h2>HTML CSS JS</h2>
          <h2>Typescript</h2>
          <h2>NEXT</h2>
          <h2>Vue</h2>
          <h2>React</h2>
          <h1>State Management</h1>
          <hr />
          <h2>zustand</h2>
          <h2>Redux</h2>
          <h2>Redux toolkit</h2>
          <h2>ReactQuery</h2>
          <h2>Pinia</h2>
          <h1>Styling</h1>
          <hr />
          <h2>Tailwind</h2>
          <h2>Styled Components</h2>
          <h2>BootStrap</h2>
          <h2>Flowbite</h2>

          <h1>Testing</h1>
          <hr />
          <h2>Jest</h2>
          <h2>Vitest (In Studying)</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Backend</h1>
          <hr />
          <h2>express</h2>
          <h2>spring</h2>
          <h2>spring boot</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Communication</h1>
          <hr />
          <h2>Jira</h2>
          <h2>Figma</h2>
          <h2>Matter Most</h2>
          <h2>Slack</h2>
          <h2>YouTrack</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Version Control</h1>
          <hr />
          <h2>git</h2>
          <h2>github</h2>
          <h2>gitlab</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Deployment</h1>
          <hr />
          <h2>netlify</h2>
          <h2>vercel</h2>
          <h2>aws</h2>
          <h2>nginX</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Certificate</h1>
          <hr />
          <h2>정보처리기사</h2>
          <h2>SQLD</h2>
        </Card>
        <Card className="w-[300px]">
          <h1>Language</h1>
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
