import axios from "axios";

export const GetMarketoLandingPageDetails = async () => {
  const marketoLandingPageDetails = await axios.get(
    `/graphql/execute.json/aem_headless_multi_language/GetMarketoLandingPageDetails`
  );
  console.log(marketoLandingPageDetails);
  return marketoLandingPageDetails.data.data.mpgMarketoLandingPageList.items[0];
};
