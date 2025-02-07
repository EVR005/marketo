import axios from "axios";
import { MarketoLandingPageDetailsType2 } from "../component_types/component_types";

export const GetMarketoLandingPageDetails = async (opco: string) => {
  const marketoLandingPageDetails = await axios.get(
    `/graphql/execute.json/aem_headless_multi_language/GetOPWTANLPMarketoLandingPageDetails;opco=${opco}`
  );
  const emptyResponse = {} as MarketoLandingPageDetailsType2;
  if (
    marketoLandingPageDetails.data.data.opwTanlpMarketoLandingPageList.items
      .length > 0
  ) {
    return marketoLandingPageDetails.data.data.opwTanlpMarketoLandingPageList
      .items[0];
  } else return emptyResponse;
};
