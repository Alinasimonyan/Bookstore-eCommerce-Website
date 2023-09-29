
export const getCategories = (data, type) => {
  const categories = data.map((product) => product[type]);
  return ["All", ...new Set(categories)];
};



