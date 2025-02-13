import Link from "next/link";
import { HeaderType } from "../component_types/component_types";

export const Header = ({ HeaderDetails }: { HeaderDetails: HeaderType }) => {
  return (
    <div className="fixed z-50 w-screen top-0 flex items-center justify-between px-12 py-6 bg-white shadow-md">
      <Link href={`${HeaderDetails?.logoLinkUrl}`} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <img
            alt="mpg-logo"
            className="w-[10rem]"
            src={HeaderDetails?.logo?._path}
          />
        </a>
      </Link>
      <Link href={`${HeaderDetails?.linkUrl}`} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          {HeaderDetails?.linkName}
        </a>
      </Link>
    </div>
  );
};
