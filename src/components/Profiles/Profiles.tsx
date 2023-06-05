import ProfileCardList from "./ProfileCardList";
import { useState } from "react";

export default function Profiles() {
  const [term, setTerm] = useState("");

  return (
    <div className="h-full w-full p-4 font-sans">
      <header className="mx-auto text-6xl font-bold">Placeholder Header</header>
      <div className="m-4 min-h-max">
        <div className="m-8 flex flex-col items-center">
          {/* <span className="-mb-14 text-neutral-400">
            Who are you looking for?
          </span> */}
          <input
            type="text"
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              setTerm(e.currentTarget.value);
            }}
            placeholder="Who are you looking for?"
            className="z-10 m-8 w-4/6 rounded-md border border-gray-400 bg-transparent placeholder:-mb-14 placeholder:text-center placeholder:text-neutral-400"
          />
        </div>
        <ProfileCardList term={term} />
      </div>
    </div>
  );
}
