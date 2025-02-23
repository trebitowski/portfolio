import Image from "next/image";
import LinkedinIcon from "./icons/linkedin";
import DownloadIcon from "./icons/download";
import GmailIcon from "./icons/gmail";
import GithubIcon from "./icons/github";
import LinkIcon from "./icons/link";

export default function Home() {
  return (
    <main className="flex p-8 flex-col pt-24 md:pt-48 items-center relative">
      <section className="z-20 max-w-xl mb-24">
        <div className="z-10 flex space-x-7 items-start mb-2">
          <div className="rounded-full bg-linear-to-br from-emerald-500/80 to-cyan-400/80 shadow-lg p-1 ring-[5px] ring-emerald-400/20 mb-7">
            <div className="rounded-full h-[64px] w-[64px]">
              <Image
                height={295}
                width={295}
                className="rounded-full"
                priority
                src="/avatar.png"
                alt="A photo of Tyler Trebitowski"
              />
            </div>
          </div>
          <div>
            <h1 className="z-20 text-3xl tracking-wider leading-relaxed font-script">
              Tyler Trebitowski
            </h1>
            <p className="z-20 tracking-wider text-xl font-light text-emerald-50/90">
              Fullstack Developer
            </p>
          </div>
        </div>
        <p className="text-xl text-emerald-50/80 mb-7">
          I am dedicated to pushing boundaries and delivering high-quality
          software.
        </p>
        <div className="z-20 flex gap-7 flex-wrap">
          <a
            className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://www.linkedin.com/in/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-linear-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
                  <LinkedinIcon
                    aria-hidden="true"
                    className="w-[18px] transform text-emerald-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div>Linkedin</div>
            </div>
          </a>
          <a
            className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://www.github.com/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-linear-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
                  <GithubIcon
                    aria-hidden="true"
                    className="w-[18px] transform text-emerald-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div>Github</div>
            </div>
          </a>
          <a
            className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="mailto:tyler.trebitowski@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-linear-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
                  <GmailIcon
                    aria-hidden="true"
                    className="w-[18px] transform text-emerald-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div>Contact me</div>
            </div>
          </a>
          <a
            className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://docs.google.com/document/d/1VVvtNMdfjUk9LlJa127mBeSND2eiF1lukPGCMr5miAg/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-linear-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
                  <DownloadIcon
                    aria-hidden="true"
                    className="w-[18px] transform text-emerald-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div>My resume</div>
            </div>
          </a>
        </div>
      </section>
      <section className="z-20 max-w-xl mb-16">
        <h2 id="Projects" className="font-script text-2xl mb-8">
          Featured Projects
        </h2>
        <div className="mb-12">
          <a
            className="block p-2 rounded-[20px] bg-linear-to-br from-emerald-500/80 to-cyan-400/80 mb-4"
            href="https://github.com/trebitowski/mudy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/projects/mudy.png"
              width={560}
              height={395}
              alt="Mudy - The personal mood journal that understand the true you."
              className="rounded-xl"
              priority
            />
            <span className="sr-only">View project</span>
          </a>
          <h3 className="text-xl font-script tracking-wide leading-relaxed">
            Müdy
          </h3>
          <p className="tracking-wide leading-relaxed mb-2.5">
            A personal journal that uses AI to analyze my entries and log my
            mood over the course of the year. Built with Next 13 and typescript.
          </p>
          <div className="flex justify-between items-center">
            <p className="uppercase tracking-[0.2em] text-emerald-400/80 text-sm">
              Next.js / tailwind / Openai
            </p>
            <div className="flex space-x-6">
              <a
                className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
                href="https://github.com/trebitowski/mudy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  aria-hidden="true"
                  className="w-[26px] text-emerald-50 opacity-50 group-hover:opacity-100 transition duration-300 ease-out"
                />
                <span className="sr-only">View on Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <a
            className="block p-2 rounded-[20px] bg-linear-to-br from-emerald-500/80 to-cyan-400/80 mb-4"
            href="https://pomodoro.trebitowski.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/projects/pomodoro.png"
              width={560}
              height={315}
              alt="A distraction free productivity timer"
              className="rounded-xl"
            />
            <span className="sr-only">View project</span>
          </a>

          <h3 className="text-xl font-script tracking-wide leading-relaxed">
            Pomodoro
          </h3>
          <p className="tracking-wide leading-relaxed mb-2.5">
            A distraction free productivity timer based on the Pomodoro method.
            Built with Next 13 and uses service workers to maintain accuracy
            while running in the background.
          </p>
          <div className="flex justify-between items-center">
            <p className="uppercase tracking-[0.2em] text-emerald-400/80 text-sm">
              Next.js / tailwind
            </p>
            <div className="flex space-x-3">
              <a
                className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
                href="https://github.com/trebitowski/pomodoro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  aria-hidden="true"
                  className="w-[26px] text-emerald-50 opacity-50 group-hover:opacity-100 transition duration-300 ease-out"
                />
                <span className="sr-only">View on Github</span>
              </a>
              <a
                className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70 p-0.5"
                href="https://pomodoro.trebitowski.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  aria-hidden="true"
                  className="w-[22px] text-emerald-50 opacity-50 group-hover:opacity-100 transition duration-300 ease-out"
                />
                <span className="sr-only">View website</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <a
            className="block p-2 rounded-[20px] bg-linear-to-br from-emerald-500/80 to-cyan-400/80 mb-4"
            href="https://trebitowski.itch.io/swiss-cheese-rapids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/projects/swiss-cheese-rapids.png"
              width={560}
              height={375}
              alt="Mudy - The personal mood journal that understand the true you."
              className="rounded-xl"
            />
            <span className="sr-only">View project</span>
          </a>

          <h3 className="text-xl font-script tracking-wide leading-relaxed">
            Swiss Cheese Rapids
          </h3>
          <p className="tracking-wide leading-relaxed mb-2.5">
            A browser game where you have to compete for a highscore by
            collecting cheese and dodging obstacles. Built with Unity for a
            72-hour game jam competition.
          </p>
          <div className="flex justify-between items-center">
            <p className="uppercase tracking-[0.2em] text-emerald-400/80 text-sm">
              Unity / Project management
            </p>
            <div className="flex space-x-3">
              <a
                className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70"
                href="https://github.com/trebitowski/swiss-cheese-rapids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  aria-hidden="true"
                  className="w-[26px] text-emerald-50 opacity-50 group-hover:opacity-100 transition duration-300 ease-out"
                />
                <span className="sr-only">View on Github</span>
              </a>
              <a
                className="group focus:outline-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-300/70 p-0.5"
                href="https://trebitowski.itch.io/swiss-cheese-rapids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  aria-hidden="true"
                  className="w-[22px] text-emerald-50 opacity-50 group-hover:opacity-100 transition duration-300 ease-out"
                />
                <span className="sr-only">View website</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
