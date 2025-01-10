import { infoSectionType } from "../component_types/component_types";
import Link from "next/link";

export const InfoSection = ({
  InfoSectionDetails,
}: {
  InfoSectionDetails: infoSectionType;
}) => {
  return (
    <div className="mt-12">
      <div>
        <img className="w-full" src={`${InfoSectionDetails?.banner?._path}`} />
      </div>
      <div className="flex flex-wrap mx-3 mt-8">
        <div className="w-[70rem]">
          <div className="float-left">
            <img src={`${InfoSectionDetails?.imageLeft?._path}`} />
          </div>
          <div className="flex-1 text-wrap">
            <div className="text-2xl font-bold">
              {InfoSectionDetails?.heading}
            </div>
            <div
              className="text-md"
              dangerouslySetInnerHTML={{
                __html: InfoSectionDetails?.description?.html,
              }}
            />
          </div>
        </div>
        <div className="col-span-6 grid place-items-center max-[1511px]:w-full max-[1511px]:mt-6">
          <img
            className="w-[23rem]"
            src={`${InfoSectionDetails?.imageRight?._path}`}
          />
          <Link href={`${InfoSectionDetails.linkUrl}`} passHref legacyBehavior>
            <a
              className="mt-8 bg-opw_blue text-white hover:bg-opw_hover_gray py-5 px-10 text-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {InfoSectionDetails?.linkName}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
