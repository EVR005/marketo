import Link from "next/link";
import { InformationCardType } from "../component_types/component_types";

export const InformationCard = ({
  information,
}: {
  information: InformationCardType;
}) => {
  return (
    <div className="w-[20rem] border-2 border-mpg_blue rounded-3xl p-5 h-[415px] bg-mpg_blue text-white">
      <img className="w-[20rem] rounded-3xl" src={information?.image?._path} />
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: information?.description?.html }}
      />
      <div>
        <Link className="font-bold underline" href={`${information?.linkUrl}`}>
          {information?.linkName}
        </Link>
      </div>
    </div>
  );
};
