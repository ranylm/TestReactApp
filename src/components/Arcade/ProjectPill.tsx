import { Link } from "react-router-dom";

type props = {
  name: string;
  project: string;
  link: Function;
};

export default function ProjectPill(props: props) {
  return (
    <>
      <div
        className="h-1/12 m-3 flex w-1/6 flex-col flex-wrap rounded-full border-2 border-gray-600 bg-gray-100"
        onClick={() => props.link()}
      >
        <p>{props.name}</p>
        <p>{props.project}</p>
      </div>
    </>
  );
}
