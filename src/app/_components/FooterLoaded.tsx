import { FooterLoadedType } from "../component_types/component_types";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const FooterLoaded = ({
  FooterLoadedDetails,
}: {
  FooterLoadedDetails: FooterLoadedType;
}) => {
  return (
    <div className="py-6 gap-y-6 bg-opw_bg_gray">
      <Link
        href={`${FooterLoadedDetails?.logoLinkUrl}`}
        className="grid place-items-center"
      >
        <img alt="mpg-logo" src={FooterLoadedDetails?.logo?._path} />
      </Link>
      <div className="flex flex-wrap max-[450px]:place-content-center mt-8">
        <div className="grid grid-rows-3 text-opw_blue text-lg min-[450px]:w-1/2 min-[450px]:pl-8">
          <div className="flex">
            <FaLocationDot className="text-3xl" />
            &nbsp;
            <div
              dangerouslySetInnerHTML={{
                __html: FooterLoadedDetails?.location?.html,
              }}
            />
          </div>
          <div className="flex">
            <FaPhoneVolume className="text-3xl" />
            &nbsp;
            <div
              dangerouslySetInnerHTML={{
                __html: FooterLoadedDetails?.contact?.html,
              }}
            />
          </div>
          <div className="flex">
            <IoMail className="text-3xl" />
            &nbsp;
            <Link href={`mailto:${FooterLoadedDetails?.email}`}>
              {FooterLoadedDetails?.email}
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-3 max-[450px]:place-items-center min-[450px]:place-items-end text-lg min-[450px]:w-1/2 min-[450px]:pr-8">
          <div>
            <Link
              className="text-opw_blue font-bold"
              href={`${FooterLoadedDetails?.privacyPolicyLink}`}
            >
              PRIVACY POLICY
            </Link>
          </div>
          <div className="flex">
            FOLLOW US &nbsp;
            <Link href={`${FooterLoadedDetails?.linkedinLink}`}>
              <FaLinkedin className="text-3xl text-opw_blue" />
            </Link>
            &nbsp;
            <Link href={`${FooterLoadedDetails?.facebookLink}`}>
              <FaFacebookSquare className="text-3xl text-opw_blue" />
            </Link>
          </div>
          <div
            className="text-opw_blue text-sm font-bold"
            dangerouslySetInnerHTML={{
              __html: FooterLoadedDetails?.otherLinks?.html,
            }}
          />
        </div>
      </div>
    </div>
  );
};
