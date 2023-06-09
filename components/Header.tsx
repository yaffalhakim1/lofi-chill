import Image from "next/image";
import Link from "next/link";
import { IconGithub, IconListTask } from "./Icons";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="mx-auto p-6 sm:p-8 max-w-[64rem] flex  justify-between">
        <Link href="/">
          <p className="font-semibold">Chill Out</p>
        </Link>
        <div className="flex justify-between ml-auto items-center">
          <a href="">
            <IconGithub width="24px" height="24px" />
          </a>
          <a href="">
            <IconListTask width="24px" height="24px" className="ml-2" />
          </a>
          {/* <Link href="https://github.com/yaffalhakim1/movies-13"></Link> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
