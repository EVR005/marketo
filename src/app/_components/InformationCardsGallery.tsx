import { InformationCard } from "./InformationCard";
import { InformationCardType } from "../component_types/component_types";

export const InformationCardsGallery = ({
  informationCardsDetails,
}: {
  informationCardsDetails: InformationCardType[];
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-5 gap-12 mt-24 text-center bg-blue-50 py-12">
      {informationCardsDetails &&
        informationCardsDetails.map(
          (informationCardDetails: InformationCardType, infoKey: number) => {
            return (
              <InformationCard
                key={infoKey}
                information={informationCardDetails}
              />
            );
          }
        )}
    </div>
  );
};
