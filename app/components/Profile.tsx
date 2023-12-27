import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-48 h-48">
        <Image
          src="/portrait.jpg"
          alt="Evan Rubel"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h1 className="mt-4 text-4xl font-bold">Evan Rubel</h1>
      <div className="mt-4 flex">
        <a
          href="https://www.linkedin.com/in/evanrubel"
          target="_blank"
          rel="noreferrer"
          className="ml-4"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://www.github.com/evanrubel"
          target="_blank"
          rel="noreferrer"
          className="ml-4"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="mailto:evanrubel1@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="ml-4"
        >
          <MdEmail size={32} />
        </a>
      </div>
    </div>
  );
}
