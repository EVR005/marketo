import { MarketoLandingPageDetailsType2 } from "../component_types/component_types";

export const GetMarketoLandingPageDetails = async (opco: string) => {
  let response = {} as MarketoLandingPageDetailsType2;

  await fetch(
    `/graphql/execute.json/aem_headless_multi_language/GetOPWTANLPMarketoLandingPageDetails;opco=${opco}`,
    { cache: "no-store", next: { revalidate: 0 } }
  ).then(async (res) => {
    await res.json().then(async (resp) => {
      if (resp.data.opwTanlpMarketoLandingPageList.items.length > 0)
        response = resp.data.opwTanlpMarketoLandingPageList.items[0];
    });
  });
  return response;
};
