export const fetchImage = async (url: string) => {
  return await fetch(`${url}`).then((data) => {
    return data.url;
  });
};
