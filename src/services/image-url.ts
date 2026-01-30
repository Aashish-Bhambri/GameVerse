const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const index = url.indexOf(target);
  if (index === -1) return url;

  return url.slice(0, index + target.length) + "crop/600/400/" + url.slice(index + target.length);
};

export default getCroppedImageUrl;
