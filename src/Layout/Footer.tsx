import GitHub from "@/assets/icons/github.png";
import Instagram from "@/assets/icons/instagram.png";
import { ReactComponent as Velog } from "@/assets/icons/velog.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-center h-48 gap-[16px] bg-gray-500 max-lg:h-60 text-white">
      <div className="flex gap-10">
        <img
          src={GitHub}
          alt="gitHub"
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
        <img
          src={Instagram}
          alt="Instagram"
          className="size-12 cursor-pointer"
          onClick={() => {
            window.location.href = "https://www.instagram.com";
          }}
        />
      </div>
      <h3>© 2024. Ji In Sung. All rights reserved.</h3>
      <div className="flex flex-col">
        <a
          href="https://www.flaticon.com/kr/free-icons/github"
          title="github 아이콘"
        >
          Github 아이콘 제작자: Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/instagram-"
          title="instagram 로고 아이콘"
        >
          Instagram 로고 아이콘 제작자: Pixel perfect - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
