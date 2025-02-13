import { HeroBannerType } from "../component_types/component_types";
import styles from "../v1/styles.module.css";

export const HeroBanner = ({
  HeroBannerDetails,
}: {
  HeroBannerDetails: HeroBannerType;
}) => {
  return (
    <div className={styles.herobanner}>
      <img
        alt="mpg-logo"
        className="w-full"
        src={HeroBannerDetails?.bannerImage?._path}
      />
      <div
        className="herobanner text-white absolute min-[992px]:top-36 min-[450px]:top-12 max-[450px]:top-6 text-center"
        dangerouslySetInnerHTML={{
          __html: HeroBannerDetails?.heading?.html,
        }}
      />
    </div>
  );
};
