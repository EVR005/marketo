import Link from "next/link";
import { InformationCardType } from "../component_types/component_types";

export const InformationCard = ({
  information,
}: {
  information: InformationCardType;
}) => {
  return (
    <div className="w-[20rem]">
      <img className="w-[20rem]" src={information?.image?._path} />
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: information?.description?.html }}
      />
      <div>
        <Link className="font-bold" href={`${information?.linkUrl}`}>
          {information?.linkName}
        </Link>
      </div>
    </div>
  );
};
