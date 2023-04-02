import ProfileCardList from "./ProfileCardList";

export default function Profiles() {
  return (
    <div className="h-full w-full p-4 font-sans">
      <header className="mx-auto text-6xl font-bold">Placeholder Header</header>
      <div className="m-4 min-h-max">
        <div className="m-8 flex flex-col items-center">
          <span className="-mb-14 text-neutral-400">
            Who are you looking for?
          </span>
          <input className="z-10 m-8 w-4/6 rounded-md border border-gray-400 bg-transparent"></input>
        </div>
        <ProfileCardList></ProfileCardList>
      </div>
    </div>
  );
}
