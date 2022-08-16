export function normalize(nonNormalized) {
  const normalizedContent = {
    byId: {},
    allIds: [],
  };

  normalizedContent.byId = nonNormalized.reduce((acc, curr) => {
    return {
      ...acc,
      [curr._id]: curr,
    };
  }, {});
  normalizedContent.allIds = nonNormalized.map((item) => item._id);

  return normalizedContent;
}
