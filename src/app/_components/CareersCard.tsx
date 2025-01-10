import { InformationCardWithoutImageType } from "../component_types/component_types";
import Link from "next/link";

export const CareersCard = ({
  CareersDetails,
}: {
  CareersDetails: InformationCardWithoutImageType;
}) => {
  return (
    <div className="grid grid-rows-3 justify-center my-36 max-[450px]:gap-y-6">
      <div
        className="row-span-2 text-2xl text-center"
        dangerouslySetInnerHTML={{ __html: CareersDetails?.description?.html }}
      />
      <div className="row-span-1 flex justify-center">
        <Link
          className="bg-mpg_blue text-white hover:text-black rounded-full p-5 text-md"
          href={`${CareersDetails?.linkUrl}`}
        >
          {CareersDetails?.linkName}
        </Link>
      </div>
    </div>
  );
};
