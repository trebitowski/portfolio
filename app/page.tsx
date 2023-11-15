import Image from "next/image";
import LinkedinIcon from "./icons/linkedin";
import DownloadIcon from "./icons/download";
import GmailIcon from "./icons/gmail";
import GithubIcon from "./icons/github";

export default function Home() {
  return (
    <main className="flex p-8 flex-col pt-24 md:pt-48 items-center relative">
      <div
        role="presentation"
        className="-z-10 absolute flex min-h-screen top-0 w-full bg-cover bg-[url('/background.jpg')]"
      >
        <div className="bg-gradient-to-br from-gray-600/95 to-gray-900/95 absolute inset-0 backdrop-grayscale" />
        <div className="bg-gradient-to-br from-emerald-600/30 to-emerald-900/30 absolute inset-0 backdrop-grayscale" />
        <div className="z-10 absolute right-0 left-0 bottom-0 bg-gradient-to-t from-gray-900 h-3/4"></div>
      </div>

      <section className="z-20 max-w-xl mb-24">
        <div className="z-10 flex space-x-7 items-start">
          <div className="rounded-full bg-gradient-to-br from-emerald-500/80 to-cyan-400/80 shadow-lg p-1 ring-[5px] ring-emerald-400/20 mb-7">
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
              Proven Fullstack Developer
            </p>
          </div>
        </div>
        <p className="text-xl text-emerald-50/80 mb-7">
          I am a fullstack developer dedicated to pushing boundaries and
          delivering high-quality software, setting new standards in the digital
          realm.
        </p>
        <div className="z-20 flex space-x-7 flex-wrap">
          <a
            className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://www.linkedin.com/in/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
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
            className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://www.github.com/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
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
            className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="mailto:tyler.trebitowski@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
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
            className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            href="https://docs.google.com/document/d/1VVvtNMdfjUk9LlJa127mBeSND2eiF1lukPGCMr5miAg/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/80 to-cyan-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-500/40 group-active:translate-y-1">
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
        <h2 id="Projects" className="font-script text-2xl">
          Projects
        </h2>
        <p className="text-xl text-emerald-50/70 mb-7">
          I am a fullstack developer dedicated to pushing boundaries and
          delivering high-quality software, setting new standards in the digital
          realm.
        </p>
      </section>
    </main>
  );
}
