import { MarketoLandingPageDetailsType1 } from "../component_types/component_types";

export const GetMarketoLandingPageDetails = async (opco: string) => {
  let response = {} as MarketoLandingPageDetailsType1;

  await fetch(
    `/graphql/execute.json/aem_headless_multi_language/GetMarketoLandingPageDetails;opco=${opco}`,
    { next: { revalidate: 0 } }
  ).then(async (res) => {
    await res.json().then(async (resp) => {
      if (resp.data.mpgMarketoLandingPageList.items.length > 0)
        response = resp.data.mpgMarketoLandingPageList.items[0];
    });
  });
  return response;
};
