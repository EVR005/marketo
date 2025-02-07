import axios from "axios";

export const GetMarketoLandingPageDetails = async (opco: string) => {
  const marketoLandingPageDetails = await axios.get(
    `/graphql/execute.json/aem_headless_multi_language/GetOPWTANLPMarketoLandingPageDetails;opco=${opco}`
  );
  console.log(marketoLandingPageDetails);
  return marketoLandingPageDetails.data.data.opwTanlpMarketoLandingPageList
    .items[0];
};
