import ProfileCard from "./ProfileCard";
export default function ProfileCardList(props) {
  const names = [
    {
      name: "Annson Cook",
      location: "Dallas, TX",
      link: "https://github.com/fiestaman",
    },
    {
      name: "Anthony Cheung",
      location: "New York",
      link: "https://github.com/ranylm",
    },
    {
      name: "Arwa Sharif",
      location: "Chicago",
      link: "https://github.com/ArwaSharif",
    },
  ];

  const Profiles = names
    .filter((name) => {
      const regex = new RegExp(`\\w*${props.term}\\w*`, "i");
      return name.name.match(regex);
    })
    .map((name) => {
      return (
        <>
          <ProfileCard profile={name} />
        </>
      );
    });

  return (
    <div className=" h- row-auto flex flex-wrap justify-center">{Profiles}</div>
  );
}
