import { InformationCardType } from "../component_types/component_types";
import Link from "next/link";

export const MainImageCard = ({
  MainImageCardDetails,
}: {
  MainImageCardDetails: InformationCardType;
}) => {
  return (
    <div className="mt-24 flex flex-wrap items-center justify-center gap-x-12 bg-gray_bg min-[450px]:mx-12 py-12 max-[450px]:px-6 max-[450px]:mx-6">
      <div className="col-span-6">
        <img className="w-[35rem]" src={MainImageCardDetails?.image?._path} />
      </div>
      <div className="col-span-6 w-[35rem] grid gap-y-12">
        <div
          className="mt-6 text-xl"
          dangerouslySetInnerHTML={{
            __html: MainImageCardDetails?.description?.html,
          }}
        />
        <div>
          <Link
            className="bg-mpg_blue text-white hover:text-black rounded-full p-5 text-md"
            href={`${MainImageCardDetails?.linkUrl}`}
          >
            {MainImageCardDetails?.linkName}
          </Link>
        </div>
      </div>
    </div>
  );
};
