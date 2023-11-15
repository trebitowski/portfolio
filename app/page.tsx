import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen p-4 flex-col items-center justify-center relative bg-cover bg-[url('/background.jpg')]">
        <div
          className="bg-gradient bg-gradient-to-br from-cyan-600/95 to-emerald-600/95 absolute inset-0 backdrop-grayscale"
          role="presentation"
        />
        <Image
          height={200}
          width={200}
          className="rounded-full mb-7 z-10"
          priority
          src="/avatar.jpeg"
          alt="Photograph portrait of Tyler Trebitowski. A man with a black shirt smiles at the camera in front of a lake on a sunny day."
        />
        <h1
          className="z-10 text-5xl mb-7 tracking-wide"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Tyler Trebitowski
        </h1>
        <h2 className="z-10 tracking-wide text-lg mb-7">Fullstack Developer</h2>
        <div className="z-10 flex space-x-10 flex-wrap">
          <a
            href="https://www.linkedin.com/in/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              className="w-10 h-10"
              priority
              alt="Linkedin logo"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.github.com/trebitowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github.svg"
              className="w-10 h-10"
              priority
              alt="Github logo"
              width={24}
              height={24}
            />
          </a>
          <a
            href="mailto:tyler.trebitowski@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/gmail.svg"
              className="w-10 h-10"
              priority
              alt="Gmail logo"
              width={24}
              height={24}
            />
          </a>
          <a
            href="/documents/TylerTrebitowskiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/download.svg"
              className="w-10 h-10"
              priority
              alt="Download resume"
              width={24}
              height={24}
            />
          </a>
        </div>
      </section>
    </main>
  );
}
