import Image from "next/image";
import Link from "next/link";
import {
  IconGithub,
  IconListTask,
  IconMoon,
  IconPauseCircle,
  IconPlayCircle,
  IconRefreshCircle,
  IconSun,
} from "./Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [timer, setTimer] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timer]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleRestart = () => {
    setTimer(1500);
    setIsRunning(false);
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (!isMounted) return null;
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="mx-auto p-6 sm:p-8 max-w-[64rem] flex  justify-between">
        <Link href="/">
          <p className="font-semibold">Chill Out</p>
        </Link>
        <div className="flex justify-between ml-auto items-center">
          <button className="mr-2" onClick={handleStartPause}>
            {isRunning ? (
              <IconPauseCircle width="24px" height="24px" />
            ) : (
              <IconPlayCircle width="24px" height="24px" />
            )}
          </button>
          <div className="mr-2">{formatTime(timer)}</div>

          <button onClick={handleRestart}>
            <IconRefreshCircle width="24px" height="24px" />
          </button>
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
