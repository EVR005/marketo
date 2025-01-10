import axios from "axios";

export const GetFestivals = async (locale: string) => {
  const festivals = await axios.get(
    `/graphql/execute.json/aem_headless_multi_language/fetchFestivals;locale=${locale}`
  );
  return festivals.data.data.festivalCardList.items;
};
