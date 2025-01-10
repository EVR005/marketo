import { InformationCardType } from "../component_types/component_types";
import Link from "next/link";

export const ContactUsCard = ({
  ContactUsCardDetails,
}: {
  ContactUsCardDetails: InformationCardType;
}) => {
  return (
    <div className="grid justify-center max-[450px]:gap-y-6 mx-3 mb-12">
      <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div
        className="row-span-2 text-md text-left mb-12"
        dangerouslySetInnerHTML={{
          __html: ContactUsCardDetails?.description?.html,
        }}
      />
      <div className="grid place-items-center gap-y-6">
        <div>
          <img src={`${ContactUsCardDetails?.image?._path}`} />
        </div>
        <div className="row-span-1 flex justify-center">
          <Link
            href={`${ContactUsCardDetails?.linkUrl}`}
            passHref
            legacyBehavior
          >
            <a
              className="bg-opw_blue text-white hover:bg-opw_hover_gray py-5 px-10 text-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ContactUsCardDetails?.linkName}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
