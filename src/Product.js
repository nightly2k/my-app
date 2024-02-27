export function getImageUrl(item, size = "s") {
  return process.env.PUBLIC_URL + item.imageId + ".jpg";
}
