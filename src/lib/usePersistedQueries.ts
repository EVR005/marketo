import aemHeadlessClient from "./aemHeadlessClient";

/**
 * Private, shared function that invokes the AEM Headless client.
 *
 * @param {String} persistedQueryName the fully qualified name of the persisted query
 * @param {*} queryParameters an optional JavaScript object containing query parameters
 * @returns the GraphQL data or an error message
 */

export const fetchPersistedQuery = async (
  persistedQueryName: string,
  queryParameters: unknown
) => {
  let data;
  let err;

  try {
    const response = await aemHeadlessClient.runPersistedQuery(
      persistedQueryName,
      queryParameters
    );
    data = response?.data;
  } catch (e) {
    console.log(e);
  }

  return { data, err };
};
