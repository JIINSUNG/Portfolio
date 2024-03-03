import { ReactComponent as Github } from "@/assets/icons/Github.svg";
import { ReactComponent as Instagram } from "@/assets/icons/InstagramIcon.svg";
import { ReactComponent as Velog } from "@/assets/icons/velog.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-center min-h-48 gap-[16px] bg-gray-500 max-lg:min-h-60 text-white dark:bg-[#121212]">
      <div className="flex gap-10">
        <Github
          className="size-12 cursor-pointer"
          onClick={() => {
            window.location.href = "https://www.github.com";
          }}
        />
        <Velog
          className="size-12 cursor-pointer"
          onClick={() => {
            window.location.href = "https://www.velog.com";
          }}
        />
        <Instagram className="size-12 cursor-pointer" />
      </div>
      <h3>© 2024. Ji In Sung. All rights reserved.</h3>
      <div className="flex flex-col">
        <a
          href="https://www.flaticon.com/kr/free-icons/github"
          title="github 아이콘"
        >
          Github 아이콘 제작자: Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
