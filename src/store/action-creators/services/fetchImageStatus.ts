export const fetchImageStatus = async (url: string) => {
  return await fetch(`${url}`).then((data) => {
    return data.status;
  });
};
