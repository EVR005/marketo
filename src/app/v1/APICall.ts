import axios from "axios";
import { MarketoLandingPageDetailsType1 } from "../component_types/component_types";

export const GetMarketoLandingPageDetails = async (opco: string) => {
  const marketoLandingPageDetails = await axios.get(
    `/graphql/execute.json/aem_headless_multi_language/GetMarketoLandingPageDetails;opco=${opco}`
  );
  console.log(marketoLandingPageDetails);
  const emptyResponse = {} as MarketoLandingPageDetailsType1;
  if (
    marketoLandingPageDetails.data.data.mpgMarketoLandingPageList.items.length >
    0
  ) {
    return marketoLandingPageDetails.data.data.mpgMarketoLandingPageList
      .items[0];
  } else return emptyResponse;
};
