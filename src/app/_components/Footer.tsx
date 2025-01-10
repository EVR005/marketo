import { FooterType } from "../component_types/component_types";
import Link from "next/link";

export const Footer = ({ FooterDetails }: { FooterDetails: FooterType }) => {
  return (
    <div className="grid grid-rows-4 justify-center my-6 gap-y-6">
      <Link
        href={`${FooterDetails?.logoLinkUrl}`}
        className="row-span-3 flex justify-center"
      >
        <img
          alt="mpg-logo"
          className="w-[25rem]"
          src={FooterDetails?.logo?._path}
        />
      </Link>
      <div
        className="row-span-1 text-md text-center text-link_color"
        dangerouslySetInnerHTML={{ __html: FooterDetails?.links?.html }}
      />
    </div>
  );
};
