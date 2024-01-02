import Footer from "./components/Footer";
// import Panel from "./components/Panel";
import Profile from "./components/Profile";
import { getTimeOfDayString } from "./utils/utils";

export default function Home() {
  // const panels = ["About", "Projects", "Contact"];
  {
    /* {panels.map((panel) => (
        <Panel key={panel} />
      ))} */
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      {/* TODO: Justify left */}
      {/* <h3 className="mt-4 text-2xl">Good {getTimeOfDayString()}!</h3> */}
      <h1 className="mt-4 text-2xl font-bold">I study</h1>
      <ul className="list-disc pl-4">
        <li className="mb-2">
          <a
            href="https://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Computer science
          </a>{" "}
          at{" "}
          <a
            href="https://www.eecs.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            MIT
          </a>{" "}
          (class of 2024)
        </li>
        <li className="mb-2">
          I am researching machine learning for life sciences and healthcare
          under the guidance of{" "}
          <a
            href="https://www.regina.csail.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Prof. Regina Barzilay
          </a>{" "}
          at{" "}
          <a
            href="https://www.csail.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            MIT CSAIL
          </a>
        </li>
        <li className="mb-2">
          I am co-president of the{" "}
          <a
            href="https://hkn.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            HKN
          </a>{" "}
          chapter at MIT
        </li>
        <li className="mb-2">
          I sing with the{" "}
          <a
            href="https://www.mitlogs.com/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            MIT Logarhythms
          </a>
        </li>
      </ul>
      <h1 className="mt-4 text-2xl font-bold">I build</h1>
      <ul className="list-disc pl-4">
        <li className="mb-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            This website
          </a>
        </li>
        <li className="mb-2">
          Improving clinical trials via in-home invisible devices at{" "}
          <a
            href="https://emeraldinno.com/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Emerald
          </a>
        </li>
        <li className="mb-2">
          Analyzing Internet port scanners at{" "}
          <a
            href="https://www.rtx.com/who-we-are/we-are-rtx/transformative-technologies/bbn"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            BBN
          </a>
        </li>
        <li className="mb-2">
          Making traffic systems smarter at{" "}
          <a
            href="https://na.panasonic.com/us/smart-mobility/cirrus"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Cirrus
          </a>
        </li>
        <li className="mb-2">
          Improving MIT&rsquo;s learning management system for computer science
          courses with{" "}
          <a
            href="https://catsoop.org/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            CAT-SOOP
          </a>
        </li>
        <li className="mb-2">
          Analyzing calcium neuronal imaging with machine learning at the{" "}
          <a
            href="https://alfagroup.csail.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            ALFA Group
          </a>
        </li>
        <li className="mb-2">
          Stopping digital copyright infringement at{" "}
          <a
            href="https://www.car.org/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            CAR
          </a>
        </li>
      </ul>
      <h1 className="mt-4 text-2xl font-bold">I teach</h1>
      <ul className="list-disc pl-4">
        <li className="mb-2">
          Mathematics and Computer Science at the{" "}
          <a
            href="https://www.tonbridge-school.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Tonbridge School
          </a>{" "}
          through{" "}
          <a
            href="https://misti.mit.edu/mit-united-kingdom"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            MISTI-UK
          </a>{" "}
          (January 2024)
        </li>
        <li className="mb-2">
          Teaching Assistant in MIT&rsquo;s{" "}
          <a
            href="https://web.mit.edu/founders/www/2023_f_2.a16.html"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {" "}
            2.A16: Founder&rsquo;s Journey
          </a>{" "}
          in entrepreneurship (Fall 2023)
        </li>
        <li className="mb-2">
          Teaching Assistant in MIT&rsquo;s{" "}
          <a
            href="https://py.mit.edu/fall23"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {" "}
            6.101: Fundamentals of Programming
          </a>{" "}
          (Fall 2023, Fall 2022)
        </li>
        <li className="mb-2">
          Course Lab Assistant in MIT&rsquo;s{" "}
          <a
            href="https://py.mit.edu/spring22"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {" "}
            6.009: Fundamentals of Programming
          </a>{" "}
          (Spring 2022, Fall 2021)
        </li>
      </ul>
      <Footer />
    </main>
  );
}
