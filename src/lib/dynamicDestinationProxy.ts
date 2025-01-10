export const fetchDynamicGraphQLDestination = () => {
  return `${process.env.NEXT_PUBLIC_HOST_URI}/graphql/:anything*`;
};
export const fetchDynamicContentDestination = () => {
  return `${process.env.NEXT_PUBLIC_HOST_URI}/content/:anything*`;
};
