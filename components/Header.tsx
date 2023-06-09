import Image from "next/image";
import Link from "next/link";
import { IconGithub, IconListTask, IconMoon, IconSun } from "./Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="mx-auto p-6 sm:p-8 max-w-[64rem] flex  justify-between">
        <Link href="/">
          <p className="font-semibold">Chill Out</p>
        </Link>
        <div className="flex justify-between ml-auto items-center">
          <button
            className="border-thin dark:hover:border-accent-200 dark:hover:text-accent-200 hover:border-accent-200 hover:text-accent-200 rounded-md p-2.5 focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? <IconMoon size={20} /> : <IconSun size={20} />}
          </button>
          <a href="https://github.com/yaffalhakim1/lofi-chill">
            <IconGithub width="24px" height="24px" />
          </a>
          <Todo />
        </div>
      </section>
    </header>
  );
};

export default Header;
