import { useState } from "react";
import ProjectPill from "./ProjectPill";
import { projects } from "../../assets/projectdata";

export default function Arcade() {
  const [IframeUrl, setIframUrl] = useState("");
  const gotoLink = (link: string) => {
    setIframUrl(link);
  };
  return (
    <div className="h-full w-full p-4">
      <ul className="flex flex-row flex-wrap">
        {projects.map((e) => (
          <ProjectPill
            name={e.name}
            project={e.project}
            link={() => gotoLink(e.gamelink ?? "")}
          />
        ))}
      </ul>
      <div className="h-screen w-full bg-white">
        <iframe
          src={IframeUrl}
          height="100%"
          width="100%"
          title="Github iFrames"
        ></iframe>
      </div>
    </div>
  );
}
