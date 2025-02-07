import { IntroRichtextType } from "../component_types/component_types";
import styles from "../v1/styles.module.css";

export const IntroRichtext = ({
  IntroRichTextDetails,
}: {
  IntroRichTextDetails: IntroRichtextType;
}) => {
  return (
    <div className="introrichtext">
      <div
        className={styles.introRichText}
        dangerouslySetInnerHTML={{
          __html: IntroRichTextDetails?.introRichtext?.html,
        }}
      />
    </div>
  );
};
