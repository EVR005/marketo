import { IntroRichtextWithImageType } from "../component_types/component_types";
import styles from "../v2/styles.module.css";

export const IntroRichtextWithImage = ({
  IntroRichTextWithImageDetails,
}: {
  IntroRichTextWithImageDetails: IntroRichtextWithImageType;
}) => {
  return (
    <div className="introrichtextwithimage">
      <div className="mt-8">
        <div>
          <img
            className="w-full"
            src={`${IntroRichTextWithImageDetails?.banner?._path}`}
          />
        </div>
        <div
          className={styles.introRichText}
          dangerouslySetInnerHTML={{
            __html: IntroRichTextWithImageDetails?.introRichtext?.html,
          }}
        />
      </div>
    </div>
  );
};
