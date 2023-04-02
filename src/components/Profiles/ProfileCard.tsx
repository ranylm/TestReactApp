import { MouseEvent } from "react";

export default function ProfileCard() {
  return (
    <div
      className="m-3 h-28 w-96 flex-grow border-spacing-1 overflow-hidden rounded-lg border border-gray-300 p-0 shadow-md shadow-neutral-100 transition-all delay-100 ease-in-out"
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).tagName === "A") return;
        if (
          e.currentTarget.style.height === "" ||
          e.currentTarget.style.height === undefined
        ) {
          e.currentTarget.style.height = "14rem";
        } else {
          e.currentTarget.style.height = "";
        }
      }}
    >
      <div className="border-b-2 bg-gray-50 p-3">
        <p className="m-1 font-medium tracking-wider text-sky-500">
          Anthony Cheung
        </p>
        <p className="m-1 text-gray-500">New York</p>
        <a
          className="m-1 text-gray-500"
          target="_blank"
          href="https://github.com/ranylm"
        >
          https://github.com/ranylm
        </a>
      </div>
      <div className="LowerProfileDiv m-1 text-left">
        Placeholder hidden text
      </div>
    </div>
  );
}
