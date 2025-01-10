import { FestivalCardType } from "../component_types/component_types";

export const FestivalCard = ({ festival }: { festival: FestivalCardType }) => {
  return (
    <div className="grid place-items-center bg-blue-900 text-yellow-500 gap-4 h-[auto] w-[30rem]">
      <div className="text-5xl">{festival?.festivalName}</div>
      <div className="text-3xl">{festival?.festivalDate}</div>
      <img
        className="w-[25rem]"
        src={festival.picture?._path}
        alt={festival.festivalName}
      />
      <div
        className="text-xl w-auto px-5 pb-5 text-justify text-blue-200"
        dangerouslySetInnerHTML={{ __html: festival?.description.html }}
      />
    </div>
  );
};
